export type SourcePdf =
  | "Комендантский 55к1.pdf"
  | "Комендантский 59к1.pdf"
  | "Парфёновская 9к1.pdf"
  | "26-я линия ВО 7.pdf"
  | "Кирочная 6.pdf";

export type LandingImage = {
  src: string;
  alt: string;
  sourcePdf: SourcePdf;
  role: "cover" | "exterior" | "interior" | "plan" | "context";
};

export type LandingSection = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  sourcePdfs: SourcePdf[];
  image?: LandingImage;
  facts: string[];
};

export const landingContent = {
  hero: {
    eyebrow: "FIRST LINE · коммерческая недвижимость",
    title: "Подбор коммерческих помещений в заметных локациях Санкт-Петербурга",
    lead: "Пять презентаций объединены в единый контент‑скелет для будущего премиального лендинга аренды коммерческих помещений.",
    sourcePdfs: [
      "Комендантский 55к1.pdf",
      "Комендантский 59к1.pdf",
      "Парфёновская 9к1.pdf",
      "26-я линия ВО 7.pdf",
      "Кирочная 6.pdf",
    ] as SourcePdf[],
    primaryImage: {
      src: "/images/landing/kirochnaya-6-cover.webp",
      alt: "Обложка презентации помещения на Кирочной 6",
      sourcePdf: "Кирочная 6.pdf" as SourcePdf,
      role: "cover",
    },
    presentationUrl: "/presentations/full.pdf",
  },
  benefits: [
    {
      title: "Пять готовых презентаций",
      text: "Контент основан на существующих PDF по объектам, без добавления цен, сроков и неподтверждённых обещаний.",
      sourcePdfs: [
        "Комендантский 55к1.pdf",
        "Комендантский 59к1.pdf",
        "Парфёновская 9к1.pdf",
        "26-я линия ВО 7.pdf",
        "Кирочная 6.pdf",
      ] as SourcePdf[],
    },
    {
      title: "Городские точки притяжения",
      text: "В подборке есть помещения в Центральном, Василеостровском, Приморском и Адмиралтейском районах.",
      sourcePdfs: [
        "Кирочная 6.pdf",
        "26-я линия ВО 7.pdf",
        "Комендантский 55к1.pdf",
        "Комендантский 59к1.pdf",
        "Парфёновская 9к1.pdf",
      ] as SourcePdf[],
    },
    {
      title: "Визуальная база для премиального UI",
      text: "Из презентаций уже подготовлены фасады, входные группы, интерьеры, окружение и планы для будущих блоков лендинга.",
      sourcePdfs: [
        "Комендантский 55к1.pdf",
        "Комендантский 59к1.pdf",
        "Парфёновская 9к1.pdf",
        "26-я линия ВО 7.pdf",
        "Кирочная 6.pdf",
      ] as SourcePdf[],
    },
  ],
  sections: [
    {
      id: "kirochnaya-6",
      eyebrow: "Центральный район · метро Чернышевская",
      title: "Кирочная 6",
      summary: "Помещение в исторической городской среде с выразительным каменным фасадом и отдельной презентацией объекта.",
      sourcePdfs: ["Кирочная 6.pdf"],
      image: {
        src: "/images/landing/kirochnaya-6-cover.webp",
        alt: "Фасад здания на Кирочной 6",
        sourcePdf: "Кирочная 6.pdf",
        role: "cover",
      },
      facts: [
        "Тип предложения из презентации: аренда помещения.",
        "Район указан на обложке: Центральный.",
        "Метро указано на обложке: Чернышевская.",
      ],
    },
    {
      id: "26-ya-liniya-vo-7",
      eyebrow: "Василеостровский район · метро Горный институт",
      title: "26-я линия ВО 7",
      summary: "Коммерческое помещение на Васильевском острове с современным уличным фасадом и заметной входной группой.",
      sourcePdfs: ["26-я линия ВО 7.pdf"],
      image: {
        src: "/images/landing/26-ya-liniya-vo-7-cover.webp",
        alt: "Входная группа помещения на 26-й линии ВО 7",
        sourcePdf: "26-я линия ВО 7.pdf",
        role: "cover",
      },
      facts: [
        "Тип предложения из презентации: аренда помещения.",
        "Район указан на обложке: Василеостровский.",
        "Метро указано на обложке: Горный институт.",
      ],
    },
    {
      id: "komendantskii-55k1",
      eyebrow: "Приморский район · метро Комендантский проспект",
      title: "Комендантский пр. 55к1",
      summary: "Объект в крупном жилом массиве Приморского района с активным первым этажом и фасадной коммерцией.",
      sourcePdfs: ["Комендантский 55к1.pdf"],
      image: {
        src: "/images/landing/komendantskii-55k1-cover.webp",
        alt: "Фасад здания на Комендантском проспекте 55к1",
        sourcePdf: "Комендантский 55к1.pdf",
        role: "cover",
      },
      facts: [
        "Тип предложения из презентации: аренда помещения.",
        "Район указан на обложке: Приморский.",
        "Метро указано на обложке: Комендантский проспект.",
      ],
    },
    {
      id: "komendantskii-59k1",
      eyebrow: "Приморский район · метро Комендантский проспект",
      title: "Комендантский пр. 59к1",
      summary: "Соседний объект на Комендантском проспекте с ярким фасадом и коммерческими помещениями на первом уровне.",
      sourcePdfs: ["Комендантский 59к1.pdf"],
      image: {
        src: "/images/landing/komendantskii-59k1-cover.webp",
        alt: "Фасад здания на Комендантском проспекте 59к1",
        sourcePdf: "Комендантский 59к1.pdf",
        role: "cover",
      },
      facts: [
        "Тип предложения из презентации: аренда помещения.",
        "Район указан на обложке: Приморский.",
        "Метро указано на обложке: Комендантский проспект.",
      ],
    },
    {
      id: "parfenovskaya-9k1",
      eyebrow: "Адмиралтейский район · Фрунзенская / Балтийская / Московские ворота",
      title: "Парфёновская улица 9 к.1",
      summary: "Помещение в современной застройке Адмиралтейского района с остеклённой угловой входной группой.",
      sourcePdfs: ["Парфёновская 9к1.pdf"],
      image: {
        src: "/images/landing/parfe-novskaya-9k1-cover.webp",
        alt: "Угловой фасад помещения на Парфёновской улице 9 к.1",
        sourcePdf: "Парфёновская 9к1.pdf",
        role: "cover",
      },
      facts: [
        "Тип предложения из презентации: аренда помещения.",
        "Район указан на обложке: Адмиралтейский.",
        "Метро указано на обложке: Фрунзенская, Балтийская, Московские ворота.",
      ],
    },
  ] satisfies LandingSection[],
  gallery: [
    {
      src: "/images/landing/kirochnaya-6-p02-img01.webp",
      alt: "Панорамный визуальный материал по Кирочной 6",
      sourcePdf: "Кирочная 6.pdf" as SourcePdf,
      role: "context",
    },
    {
      src: "/images/landing/26-ya-liniya-vo-7-p02-img01.webp",
      alt: "Панорамный визуальный материал по 26-й линии ВО 7",
      sourcePdf: "26-я линия ВО 7.pdf" as SourcePdf,
      role: "context",
    },
    {
      src: "/images/landing/komendantskii-55k1-p02-img01.webp",
      alt: "Визуальный материал по Комендантскому проспекту 55к1",
      sourcePdf: "Комендантский 55к1.pdf" as SourcePdf,
      role: "context",
    },
    {
      src: "/images/landing/komendantskii-59k1-p02-img01.webp",
      alt: "Визуальный материал по Комендантскому проспекту 59к1",
      sourcePdf: "Комендантский 59к1.pdf" as SourcePdf,
      role: "context",
    },
    {
      src: "/images/landing/parfe-novskaya-9k1-p02-img04.webp",
      alt: "Визуальный материал по Парфёновской улице 9 к.1",
      sourcePdf: "Парфёновская 9к1.pdf" as SourcePdf,
      role: "context",
    },
  ] satisfies LandingImage[],
  cta: {
    title: "Запросить актуальную информацию по помещению",
    text: "Форма заявки, PHP‑обработчик и SMTP‑отправка запланированы для PR 3. В PR 1 оставлен только контентный CTA без backend‑логики.",
    actionLabel: "Скачать объединённую презентацию",
    presentationUrl: "/presentations/full.pdf",
  },
};
