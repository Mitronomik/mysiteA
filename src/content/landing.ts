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
  caption?: string;
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
    title: "Коммерческие помещения в заметных локациях Санкт-Петербурга",
    lead: "Подборка помещений для аренды в Центральном, Василеостровском, Приморском и Адмиралтейском районах — с фасадами, входными группами и материалами для быстрой оценки.",
    sourcePdfs: [
      "Комендантский 55к1.pdf",
      "Комендантский 59к1.pdf",
      "Парфёновская 9к1.pdf",
      "26-я линия ВО 7.pdf",
      "Кирочная 6.pdf",
    ] as SourcePdf[],
    primaryImage: {
      src: "/images/landing/kirochnaya-6-p01-img02.webp",
      alt: "Фасад и входная группа помещения на Кирочной улице",
      sourcePdf: "Кирочная 6.pdf" as SourcePdf,
      role: "exterior",
    },
    presentationUrl: "/presentations/full.pdf",
  },
  benefits: [
    {
      title: "Готовая подборка адресов",
      text: "Пять коммерческих помещений собраны в единую витрину для первичного выбора и обсуждения деталей.",
      sourcePdfs: [
        "Комендантский 55к1.pdf",
        "Комендантский 59к1.pdf",
        "Парфёновская 9к1.pdf",
        "26-я линия ВО 7.pdf",
        "Кирочная 6.pdf",
      ] as SourcePdf[],
    },
    {
      title: "Разные городские сценарии",
      text: "В подборке представлены исторический центр, Васильевский остров, Приморский и Адмиралтейский районы.",
      sourcePdfs: [
        "Кирочная 6.pdf",
        "26-я линия ВО 7.pdf",
        "Комендантский 55к1.pdf",
        "Комендантский 59к1.pdf",
        "Парфёновская 9к1.pdf",
      ] as SourcePdf[],
    },
    {
      title: "Понятные визуальные материалы",
      text: "Для объектов доступны фасады, входные группы, интерьеры, окружение и планировочные материалы.",
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
      summary: "Помещение в исторической городской среде с выразительным каменным фасадом и аккуратной входной группой.",
      sourcePdfs: ["Кирочная 6.pdf"],
      image: {
        src: "/images/landing/kirochnaya-6-p01-img02.webp",
        alt: "Фасад здания на Кирочной 6",
        sourcePdf: "Кирочная 6.pdf",
        role: "exterior",
      },
      facts: [
        "Формат: аренда помещения.",
        "Район: Центральный.",
        "Метро: Чернышевская.",
      ],
    },
    {
      id: "26-ya-liniya-vo-7",
      eyebrow: "Василеостровский район · метро Горный институт",
      title: "26-я линия ВО 7",
      summary: "Коммерческое помещение на Васильевском острове с уличным фронтом и возможностью оценить интерьер по визуальным материалам.",
      sourcePdfs: ["26-я линия ВО 7.pdf"],
      image: {
        src: "/images/landing/26-ya-liniya-vo-7-p03-img01.webp",
        alt: "Интерьер помещения на 26-й линии ВО 7",
        sourcePdf: "26-я линия ВО 7.pdf",
        role: "interior",
      },
      facts: [
        "Формат: аренда помещения.",
        "Район: Василеостровский.",
        "Метро: Горный институт.",
      ],
    },
    {
      id: "komendantskii-55k1",
      eyebrow: "Приморский район · метро Комендантский проспект",
      title: "Комендантский пр. 55к1",
      summary: "Объект в крупном жилом массиве Приморского района с активной линией первых этажей и фасадной коммерцией.",
      sourcePdfs: ["Комендантский 55к1.pdf"],
      image: {
        src: "/images/landing/komendantskii-55k1-p01-img01.webp",
        alt: "Фасад здания на Комендантском проспекте 55к1",
        sourcePdf: "Комендантский 55к1.pdf",
        role: "exterior",
      },
      facts: [
        "Формат: аренда помещения.",
        "Район: Приморский.",
        "Метро: Комендантский проспект.",
      ],
    },
    {
      id: "komendantskii-59k1",
      eyebrow: "Приморский район · метро Комендантский проспект",
      title: "Комендантский пр. 59к1",
      summary: "Соседний вариант на Комендантском проспекте с современным фасадом и помещениями на первом уровне.",
      sourcePdfs: ["Комендантский 59к1.pdf"],
      image: {
        src: "/images/landing/komendantskii-59k1-p05-img02.webp",
        alt: "Коммерческий фасад на Комендантском проспекте 59к1",
        sourcePdf: "Комендантский 59к1.pdf",
        role: "exterior",
      },
      facts: [
        "Формат: аренда помещения.",
        "Район: Приморский.",
        "Метро: Комендантский проспект.",
      ],
    },
    {
      id: "parfenovskaya-9k1",
      eyebrow: "Адмиралтейский район · Фрунзенская / Балтийская / Московские ворота",
      title: "Парфёновская улица 9 к.1",
      summary: "Помещение в современной застройке Адмиралтейского района с остеклённой угловой входной группой.",
      sourcePdfs: ["Парфёновская 9к1.pdf"],
      image: {
        src: "/images/landing/parfe-novskaya-9k1-p01-img01.webp",
        alt: "Угловой фасад помещения на Парфёновской улице 9 к.1",
        sourcePdf: "Парфёновская 9к1.pdf",
        role: "exterior",
      },
      facts: [
        "Формат: аренда помещения.",
        "Район: Адмиралтейский.",
        "Метро: Фрунзенская, Балтийская, Московские ворота.",
      ],
    },
  ] satisfies LandingSection[],
  gallery: [
    {
      src: "/images/landing/kirochnaya-6-p01-img02.webp",
      alt: "Фасад помещения на Кирочной 6",
      sourcePdf: "Кирочная 6.pdf" as SourcePdf,
      role: "exterior",
      caption: "Фасад",
    },
    {
      src: "/images/landing/parfe-novskaya-9k1-p01-img01.webp",
      alt: "Угловая входная группа на Парфёновской улице 9 к.1",
      sourcePdf: "Парфёновская 9к1.pdf" as SourcePdf,
      role: "exterior",
      caption: "Входная группа",
    },
    {
      src: "/images/landing/parfe-novskaya-9k1-p03-img02.webp",
      alt: "Интерьер помещения на Парфёновской улице 9 к.1",
      sourcePdf: "Парфёновская 9к1.pdf" as SourcePdf,
      role: "interior",
      caption: "Интерьер",
    },
    {
      src: "/images/landing/komendantskii-59k1-p05-img02.webp",
      alt: "Фасад коммерческого помещения на Комендантском проспекте 59к1",
      sourcePdf: "Комендантский 59к1.pdf" as SourcePdf,
      role: "exterior",
      caption: "Фронт улицы",
    },
    {
      src: "/images/landing/komendantskii-55k1-p01-img01.webp",
      alt: "Жилой дом с коммерческими помещениями на первом этаже",
      sourcePdf: "Комендантский 55к1.pdf" as SourcePdf,
      role: "context",
      caption: "Локация",
    },
    {
      src: "/images/landing/26-ya-liniya-vo-7-p03-img01.webp",
      alt: "Интерьер помещения на 26-й линии ВО 7",
      sourcePdf: "26-я линия ВО 7.pdf" as SourcePdf,
      role: "interior",
      caption: "Интерьер",
    },
  ] satisfies LandingImage[],
  cta: {
    title: "Получить консультацию по подходящему помещению",
    text: "Оставьте контакты — специалист уточнит интересующий адрес и подскажет, какие материалы посмотреть в первую очередь.",
    actionLabel: "Скачать объединённую презентацию",
    presentationUrl: "/presentations/full.pdf",
  },
};
