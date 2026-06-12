<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception as MailerException;

const SUCCESS_REDIRECT = '/?lead=success#contact';
const ERROR_REDIRECT = '/?lead=error#contact';

function wants_json(): bool
{
    $accept = $_SERVER['HTTP_ACCEPT'] ?? '';
    $requestedWith = $_SERVER['HTTP_X_REQUESTED_WITH'] ?? '';

    return stripos($accept, 'application/json') !== false
        || strcasecmp($requestedWith, 'XMLHttpRequest') === 0;
}

function respond(bool $ok, int $status = 302): void
{
    if (wants_json()) {
        http_response_code($ok ? 200 : max(400, $status));
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['ok' => $ok], JSON_UNESCAPED_UNICODE);
        exit;
    }

    http_response_code($status);
    header('Location: ' . ($ok ? SUCCESS_REDIRECT : ERROR_REDIRECT), true, $status);
    exit;
}

function posted_string(string $key, int $maxLength): string
{
    $value = $_POST[$key] ?? '';
    if (!is_string($value)) {
        return '';
    }

    $value = trim($value);
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]+/u', '', $value) ?? '';
    $value = str_replace(["\r\n", "\r"], "\n", $value);

    return limit_string($value, $maxLength);
}

function limit_string(string $value, int $maxLength): string
{
    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $maxLength, 'UTF-8');
    }

    return substr($value, 0, $maxLength);
}

function has_header_injection(string $value): bool
{
    return preg_match('/[\r\n]/', $value) === 1;
}

function valid_phone(string $phone): bool
{
    if (!preg_match('/^[0-9+()\-\s.]{7,32}$/', $phone)) {
        return false;
    }

    $digits = preg_replace('/\D+/', '', $phone) ?? '';

    return strlen($digits) >= 7 && strlen($digits) <= 15;
}

function config_value(array $config, string $key): string
{
    $value = $config[$key] ?? '';

    return is_string($value) ? trim($value) : '';
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(false, 303);
}

$name = posted_string('name', 120);
$phone = posted_string('phone', 40);
$comment = posted_string('comment', 1000);
$honeypot = posted_string('website', 200);
$consent = $_POST['consent'] ?? '';

if ($honeypot !== '') {
    respond(true, 303);
}

if ($name === '' || $phone === '' || !valid_phone($phone) || $consent !== 'yes') {
    respond(false, 303);
}

if (has_header_injection($name) || has_header_injection($phone)) {
    respond(false, 303);
}

$configPath = dirname(__DIR__) . '/config/mail-config.php';
$autoloadPath = dirname(__DIR__) . '/vendor/autoload.php';

if (!is_file($configPath) || !is_file($autoloadPath)) {
    respond(false, 303);
}

$config = require $configPath;
if (!is_array($config)) {
    respond(false, 303);
}

$smtpHost = config_value($config, 'smtp_host');
$smtpUser = config_value($config, 'smtp_user');
$smtpPassword = config_value($config, 'smtp_password');
$mailFrom = config_value($config, 'mail_from');
$mailFromName = config_value($config, 'mail_from_name') ?: 'FIRST LINE';
$leadEmailTo = config_value($config, 'lead_email_to');
$smtpPort = (int) ($config['smtp_port'] ?? 465);

if (
    $smtpHost === ''
    || $smtpUser === ''
    || $smtpPassword === ''
    || !filter_var($mailFrom, FILTER_VALIDATE_EMAIL)
    || !filter_var($leadEmailTo, FILTER_VALIDATE_EMAIL)
    || $smtpPort <= 0
) {
    respond(false, 303);
}

require $autoloadPath;

$site = $_SERVER['HTTP_HOST'] ?? 'FIRST LINE';
$userAgent = posted_string_from_server('HTTP_USER_AGENT', 300);
$referer = posted_string_from_server('HTTP_REFERER', 300);
$date = (new DateTimeImmutable('now', new DateTimeZone('Europe/Moscow')))->format('d.m.Y H:i:s T');

$body = implode("\n", [
    'Новая заявка с сайта FIRST LINE',
    '',
    'Имя:',
    $name,
    '',
    'Телефон:',
    $phone,
    '',
    'Комментарий:',
    $comment !== '' ? $comment : '—',
    '',
    'Согласие:',
    'Да',
    '',
    'Дата:',
    $date,
    '',
    'Источник:',
    $referer !== '' ? $referer : $site,
    '',
    'User Agent:',
    $userAgent !== '' ? $userAgent : '—',
]);

try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = $smtpHost;
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUser;
    $mail->Password = $smtpPassword;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = $smtpPort;
    $mail->CharSet = 'UTF-8';
    $mail->SMTPDebug = SMTP::DEBUG_OFF;

    $mail->setFrom($mailFrom, $mailFromName);
    $mail->addAddress($leadEmailTo);
    $mail->addReplyTo($mailFrom, $mailFromName);

    $mail->Subject = 'Новая заявка с сайта FIRST LINE';
    $mail->Body = $body;
    $mail->AltBody = $body;

    $mail->send();
    respond(true, 303);
} catch (MailerException) {
    respond(false, 303);
} catch (Throwable) {
    respond(false, 303);
}

function posted_string_from_server(string $key, int $maxLength): string
{
    $value = $_SERVER[$key] ?? '';
    if (!is_string($value)) {
        return '';
    }

    $value = trim($value);
    $value = preg_replace('/[\x00-\x1F\x7F]+/u', '', $value) ?? '';

    return limit_string($value, $maxLength);
}
