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

export type LandingSpec = {
  label: string;
  value: string;
  sourcePdf: SourcePdf;
};

export type LandingSection = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  sourcePdfs: SourcePdf[];
  image?: LandingImage;
  specs: LandingSpec[];
  highlights: string[];
  ctaLabel: string;
};

export const landingContent = {
  hero: {
    eyebrow: "FIRST LINE · коммерческая недвижимость",
    title: "Коммерческие помещения в заметных локациях Петербурга",
    titleLine1: "Коммерческие помещения",
    titleLine2: "в заметных локациях Петербурга",
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
      title: "Сравните несколько адресов за один просмотр",
      text: "Пять объектов собраны на одной странице: проще быстро отобрать локации, которые стоит обсудить с консультантом.",
      sourcePdfs: [
        "Комендантский 55к1.pdf",
        "Комендантский 59к1.pdf",
        "Парфёновская 9к1.pdf",
        "26-я линия ВО 7.pdf",
        "Кирочная 6.pdf",
      ] as SourcePdf[],
    },
    {
      title: "Выберите помещение под формат бизнеса",
      text: "В карточках видны район, метро, планировочные параметры и особенности фасада — это помогает понять, какой объект подходит под ваш сценарий.",
      sourcePdfs: [
        "Кирочная 6.pdf",
        "26-я линия ВО 7.pdf",
        "Комендантский 55к1.pdf",
        "Комендантский 59к1.pdf",
        "Парфёновская 9к1.pdf",
      ] as SourcePdf[],
    },
    {
      title: "Получите материалы для быстрой оценки",
      text: "Оставьте контакт — подскажем, какие фото, планы и детали по выбранному адресу посмотреть в первую очередь.",
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
      summary: "Помещение в исторической городской среде с выразительным каменным фасадом, уличной входной группой и планом с несколькими залами.",
      sourcePdfs: ["Кирочная 6.pdf"],
      image: {
        src: "/images/landing/kirochnaya-6-p01-img02.webp",
        alt: "Фасад здания на Кирочной 6",
        sourcePdf: "Кирочная 6.pdf",
        role: "exterior",
      },
      specs: [
        { label: "Адрес", value: "Кирочная 6", sourcePdf: "Кирочная 6.pdf" },
        { label: "Район", value: "Центральный", sourcePdf: "Кирочная 6.pdf" },
        { label: "Метро", value: "Чернышевская", sourcePdf: "Кирочная 6.pdf" },
        { label: "Высота", value: "h = 3,35 по плану", sourcePdf: "Кирочная 6.pdf" },
        { label: "План", value: "залы 45,2 / 44,6 / 25,0 м² на плане", sourcePdf: "Кирочная 6.pdf" },
      ],
      highlights: [
        "Исторический фасад и уличный вход",
        "Несколько помещений разного размера по плану",
        "Визуальные материалы по фасаду, интерьеру и планировке",
      ],
      ctaLabel: "Запросить детали по Кирочной 6",
    },
    {
      id: "26-ya-liniya-vo-7",
      eyebrow: "Василеостровский район · метро Горный институт",
      title: "26-я линия ВО 7",
      summary: "Коммерческое помещение на Васильевском острове с открытой планировочной зоной, витринным остеклением и отдельными вспомогательными помещениями по плану.",
      sourcePdfs: ["26-я линия ВО 7.pdf"],
      image: {
        src: "/images/landing/26-ya-liniya-vo-7-p03-img01.webp",
        alt: "Интерьер помещения на 26-й линии ВО 7",
        sourcePdf: "26-я линия ВО 7.pdf",
        role: "interior",
      },
      specs: [
        { label: "Адрес", value: "26-я линия ВО 7", sourcePdf: "26-я линия ВО 7.pdf" },
        { label: "Район", value: "Василеостровский", sourcePdf: "26-я линия ВО 7.pdf" },
        { label: "Метро", value: "Горный институт", sourcePdf: "26-я линия ВО 7.pdf" },
        { label: "Площадь", value: "135,79 м² по плану", sourcePdf: "26-я линия ВО 7.pdf" },
        { label: "Основной зал", value: "129,36 м² по плану", sourcePdf: "26-я линия ВО 7.pdf" },
      ],
      highlights: [
        "Витринное остекление и входная зона видны на материалах",
        "Крупный основной зал с небольшой вспомогательной зоной",
        "Есть фото интерьера и планировочный фрагмент",
      ],
      ctaLabel: "Запросить детали по 26-й линии ВО 7",
    },
    {
      id: "komendantskii-55k1",
      eyebrow: "Приморский район · метро Комендантский проспект",
      title: "Комендантский пр. 55к1",
      summary: "Помещение в крупном жилом массиве Приморского района с фасадной коммерцией на первом уровне и фото интерьера с витринными окнами.",
      sourcePdfs: ["Комендантский 55к1.pdf"],
      image: {
        src: "/images/landing/komendantskii-55k1-p01-img01.webp",
        alt: "Фасад здания на Комендантском проспекте 55к1",
        sourcePdf: "Комендантский 55к1.pdf",
        role: "exterior",
      },
      specs: [
        { label: "Адрес", value: "Комендантский пр. 55к1", sourcePdf: "Комендантский 55к1.pdf" },
        { label: "Район", value: "Приморский", sourcePdf: "Комендантский 55к1.pdf" },
        { label: "Метро", value: "Комендантский проспект", sourcePdf: "Комендантский 55к1.pdf" },
        { label: "Фасад", value: "коммерческий первый уровень", sourcePdf: "Комендантский 55к1.pdf" },
        { label: "Интерьер", value: "витринные окна и открытый зал на фото", sourcePdf: "Комендантский 55к1.pdf" },
      ],
      highlights: [
        "Фасадная коммерческая линия в жилом комплексе",
        "Фото интерьера показывают окна, входную группу и открытую зону",
        "Подходит для сравнения с соседним объектом на Комендантском проспекте",
      ],
      ctaLabel: "Запросить детали по Комендантскому 55к1",
    },
    {
      id: "komendantskii-59k1",
      eyebrow: "Приморский район · метро Комендантский проспект",
      title: "Комендантский пр. 59к1",
      summary: "Соседний вариант на Комендантском проспекте с современным фасадом, отдельной входной зоной и планом помещения площадью 102,2 м².",
      sourcePdfs: ["Комендантский 59к1.pdf"],
      image: {
        src: "/images/landing/komendantskii-59k1-p05-img02.webp",
        alt: "Коммерческий фасад на Комендантском проспекте 59к1",
        sourcePdf: "Комендантский 59к1.pdf",
        role: "exterior",
      },
      specs: [
        { label: "Адрес", value: "Комендантский пр. 59к1", sourcePdf: "Комендантский 59к1.pdf" },
        { label: "Район", value: "Приморский", sourcePdf: "Комендантский 59к1.pdf" },
        { label: "Метро", value: "Комендантский проспект", sourcePdf: "Комендантский 59к1.pdf" },
        { label: "Площадь", value: "102,2 м² по плану", sourcePdf: "Комендантский 59к1.pdf" },
        { label: "Фронт", value: "фасад с входной группой", sourcePdf: "Комендантский 59к1.pdf" },
      ],
      highlights: [
        "План показывает единое помещение 102,2 м²",
        "На фасадных материалах видны вход и витринная линия",
        "Можно рассматривать в паре с объектом 55к1",
      ],
      ctaLabel: "Запросить детали по Комендантскому 59к1",
    },
    {
      id: "parfenovskaya-9k1",
      eyebrow: "Адмиралтейский район · Фрунзенская / Балтийская / Московские ворота",
      title: "Парфёновская улица 9 к.1",
      summary: "Помещение в современной застройке Адмиралтейского района с остеклённой угловой входной группой и крупным основным залом по плану.",
      sourcePdfs: ["Парфёновская 9к1.pdf"],
      image: {
        src: "/images/landing/parfe-novskaya-9k1-p01-img01.webp",
        alt: "Угловой фасад помещения на Парфёновской улице 9 к.1",
        sourcePdf: "Парфёновская 9к1.pdf",
        role: "exterior",
      },
      specs: [
        { label: "Адрес", value: "Парфёновская улица 9 к.1", sourcePdf: "Парфёновская 9к1.pdf" },
        { label: "Район", value: "Адмиралтейский", sourcePdf: "Парфёновская 9к1.pdf" },
        { label: "Метро", value: "Фрунзенская / Балтийская / Московские ворота", sourcePdf: "Парфёновская 9к1.pdf" },
        { label: "Основной зал", value: "91,3 м² по плану", sourcePdf: "Парфёновская 9к1.pdf" },
        { label: "План", value: "дополнительные зоны 14,4 и 5,2 м²", sourcePdf: "Парфёновская 9к1.pdf" },
      ],
      highlights: [
        "Остеклённая угловая входная группа",
        "Крупный основной зал и дополнительные зоны по плану",
        "Есть фасадные, интерьерные и планировочные материалы",
      ],
      ctaLabel: "Запросить детали по Парфёновской 9 к.1",
    },
  ] satisfies LandingSection[],
  gallery: [
    {
      src: "/images/landing/kirochnaya-6-p01-img02.webp",
      alt: "Фасад помещения на Кирочной 6",
      sourcePdf: "Кирочная 6.pdf" as SourcePdf,
      role: "exterior",
      caption: "Кирочная 6 · фасад",
    },
    {
      src: "/images/landing/kirochnaya-6-p05-img01.webp",
      alt: "План помещения на Кирочной 6",
      sourcePdf: "Кирочная 6.pdf" as SourcePdf,
      role: "plan",
      caption: "Кирочная 6 · планировка",
    },
    {
      src: "/images/landing/26-ya-liniya-vo-7-p03-img01.webp",
      alt: "Интерьер помещения на 26-й линии ВО 7",
      sourcePdf: "26-я линия ВО 7.pdf" as SourcePdf,
      role: "interior",
      caption: "26-я линия ВО 7 · интерьер",
    },
    {
      src: "/images/landing/26-ya-liniya-vo-7-p05-img01.webp",
      alt: "План помещения на 26-й линии ВО 7",
      sourcePdf: "26-я линия ВО 7.pdf" as SourcePdf,
      role: "plan",
      caption: "26-я линия ВО 7 · план 135,79 м²",
    },
    {
      src: "/images/landing/komendantskii-55k1-p01-img01.webp",
      alt: "Фасад здания на Комендантском проспекте 55к1",
      sourcePdf: "Комендантский 55к1.pdf" as SourcePdf,
      role: "context",
      caption: "Комендантский 55к1 · фасад",
    },
    {
      src: "/images/landing/komendantskii-59k1-p05-img02.webp",
      alt: "Фасад коммерческого помещения на Комендантском проспекте 59к1",
      sourcePdf: "Комендантский 59к1.pdf" as SourcePdf,
      role: "exterior",
      caption: "Комендантский 59к1 · входная группа",
    },
    {
      src: "/images/landing/komendantskii-59k1-p05-img01.webp",
      alt: "План помещения на Комендантском проспекте 59к1",
      sourcePdf: "Комендантский 59к1.pdf" as SourcePdf,
      role: "plan",
      caption: "Комендантский 59к1 · план 102,2 м²",
    },
    {
      src: "/images/landing/parfe-novskaya-9k1-p01-img01.webp",
      alt: "Угловая входная группа на Парфёновской улице 9 к.1",
      sourcePdf: "Парфёновская 9к1.pdf" as SourcePdf,
      role: "exterior",
      caption: "Парфёновская 9 к.1 · угловой вход",
    },
    {
      src: "/images/landing/parfe-novskaya-9k1-p04-img03.webp",
      alt: "План помещения на Парфёновской улице 9 к.1",
      sourcePdf: "Парфёновская 9к1.pdf" as SourcePdf,
      role: "plan",
      caption: "Парфёновская 9 к.1 · планировка",
    },
  ] satisfies LandingImage[],
  cta: {
    title: "Получить консультацию по подходящему помещению",
    text: "Оставьте контакты — специалист уточнит интересующий адрес и подскажет, какие материалы посмотреть в первую очередь.",
    actionLabel: "Скачать объединённую презентацию",
    presentationUrl: "/presentations/full.pdf",
  },
};
