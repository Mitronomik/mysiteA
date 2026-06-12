# Lead form setup: PHP, PHPMailer and Yandex SMTP

PR 3 makes the static landing form submit to `public/lead.php`. Astro still builds a static site; PHP is executed only by a PHP-capable server such as Beget shared hosting or a local PHP server.

## Files

- `src/components/LeadForm.astro` — static HTML form with `POST /lead.php`, consent checkbox and honeypot field.
- `public/lead.php` — PHP handler that validates the request and sends the lead through PHPMailer.
- `config/mail-config.example.php` — safe example config without real credentials.
- `config/mail-config.php` — local/production config file. This file is ignored by Git and must not be committed.

## Install PHPMailer

Install Composer dependencies before testing or deploying the PHP handler:

```sh
composer install
```

This repository declares PHPMailer in `composer.json`, but does not commit `vendor/`. Upload/install Composer dependencies on the hosting environment so that `vendor/autoload.php` exists next to the project root used by `lead.php`.

## Configure Yandex SMTP

1. Copy the example config:

   ```sh
   cp config/mail-config.example.php config/mail-config.php
   ```

2. Fill `config/mail-config.php` with production values:

   ```php
   <?php

   return [
       'smtp_host' => 'smtp.yandex.ru',
       'smtp_port' => 465,
       'smtp_user' => 'mailbox@example.ru',
       'smtp_password' => 'YANDEX_APP_PASSWORD',
       'mail_from' => 'mailbox@example.ru',
       'mail_from_name' => 'FIRST LINE',
       'lead_email_to' => 'recipient@example.ru',
   ];
   ```

3. Use a Yandex app password, not the main mailbox password.
4. Keep `config/mail-config.php` outside Git and preferably outside the public web root.

## Local testing notes

- `npm run dev` and the Astro dev server do not execute PHP.
- To test the form locally, use a PHP-capable server and make sure `lead.php` can read:
  - `../config/mail-config.php`
  - `../vendor/autoload.php`
- A quick syntax check is:

  ```sh
  php -l public/lead.php
  ```

## Deployment notes for Beget

1. Run `npm run build`.
2. Upload the built static files, including `lead.php` copied from `public/`, to the site document root.
3. Upload `config/mail-config.php` and Composer `vendor/` so the PHP handler can access them via paths adjacent to the document root parent.
4. Submit a test form with a real phone number.
5. Verify that the recipient mailbox receives an email with the subject `Новая заявка с сайта FIRST LINE`.
6. If delivery fails, check only server logs/configuration. The public form intentionally redirects to a generic error URL and does not expose SMTP details.
