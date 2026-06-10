export type SourcePdf =
  | "Комендантский 55к1.pdf"
  | "Комендантский 59к1.pdf"
  | "Парфёновская 9к1.pdf"
  | "26-я линия ВО 7.pdf"
  | "Кирочная 6.pdf";

export type LandingSource = SourcePdf | "first-line-landing.html";

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
  source: LandingSource;
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

const referenceSource = "first-line-landing.html" as const;

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
      title: "Первая линия и заметные входные группы",
      text: "В подборке есть помещения с витринными окнами, отдельными входами и сильной уличной видимостью для клиентского потока.",
      sourcePdfs: [
        "Комендантский 55к1.pdf",
        "Комендантский 59к1.pdf",
        "Парфёновская 9к1.pdf",
        "26-я линия ВО 7.pdf",
        "Кирочная 6.pdf",
      ] as SourcePdf[],
    },
    {
      title: "Готовность к запуску бизнеса",
      text: "Чистовая отделка или ремонт от предыдущего арендатора помогают быстрее оценить сроки открытия и объём доработок.",
      sourcePdfs: [
        "Кирочная 6.pdf",
        "26-я линия ВО 7.pdf",
        "Комендантский 55к1.pdf",
        "Комендантский 59к1.pdf",
        "Парфёновская 9к1.pdf",
      ] as SourcePdf[],
    },
    {
      title: "Заселённые жилые комплексы",
      text: "Объекты в ЖК «Палацио», «YOGA» и «Галактика» подходят для сервисов, ритейла и повседневных форматов рядом с жильцами.",
      sourcePdfs: [
        "Комендантский 55к1.pdf",
        "Комендантский 59к1.pdf",
        "Парфёновская 9к1.pdf",
        "26-я линия ВО 7.pdf",
      ] as SourcePdf[],
    },
    {
      title: "Разные районы под разные форматы",
      text: "Центр, Васильевский остров, Приморский и Адмиралтейский районы дают разные сценарии для кафе, услуг, шоурума или офиса продаж.",
      sourcePdfs: [
        "Кирочная 6.pdf",
        "26-я линия ВО 7.pdf",
        "Комендантский 55к1.pdf",
        "Комендантский 59к1.pdf",
        "Парфёновская 9к1.pdf",
      ] as SourcePdf[],
    },
    {
      title: "Сопровождение выбора и сделки",
      text: "Поможем сравнить площади, мощность, входные группы и инженерные параметры, а затем запросить условия по выбранному адресу.",
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
      id: "26-ya-liniya-vo-7",
      eyebrow: "ЖК «Палацио» · Васильевский остров · метро Горный институт",
      title: "26-я линия В.О., 7",
      summary: "Готовое помещение в жилом комплексе «Палацио» с двумя входами, чистовой отделкой, приточной инженерией и мощностью для разных форматов бизнеса.",
      sourcePdfs: ["26-я линия ВО 7.pdf"],
      image: {
        src: "/images/landing/26-ya-liniya-vo-7-p03-img01.webp",
        alt: "Интерьер помещения на 26-й линии ВО 7",
        sourcePdf: "26-я линия ВО 7.pdf",
        role: "interior",
      },
      specs: [
        { label: "Площадь", value: "133,2 м²", source: referenceSource },
        { label: "Потолки", value: "3,5 м", source: referenceSource },
        { label: "Мощность", value: "20 кВт", source: referenceSource },
        { label: "Вход", value: "2 входа", source: referenceSource },
        { label: "Отделка", value: "чистовая", source: referenceSource },
        { label: "Инженерия", value: "вентканал и приточка", source: referenceSource },
        { label: "ЖК", value: "«Палацио»", source: referenceSource },
        { label: "Метро", value: "Горный институт", source: referenceSource },
      ],
      highlights: [
        "Два входа для разделения потоков посетителей и персонала",
        "Чистовая отделка для более быстрого запуска",
        "Подходит для услуг, торговли, шоурума или клиентского офиса",
      ],
      ctaLabel: "Запросить детали",
    },
    {
      id: "kirochnaya-6",
      eyebrow: "Центральный район · метро Чернышевская",
      title: "Кирочная улица, 6",
      summary: "Помещение в историческом центре с выразительным фасадом, двумя входами, потолками 3,5 м и ремонтом от предыдущего арендатора.",
      sourcePdfs: ["Кирочная 6.pdf"],
      image: {
        src: "/images/landing/kirochnaya-6-p01-img02.webp",
        alt: "Фасад здания на Кирочной 6",
        sourcePdf: "Кирочная 6.pdf",
        role: "exterior",
      },
      specs: [
        { label: "Площадь", value: "156,1 м²", source: referenceSource },
        { label: "Потолки", value: "3,5 м", source: referenceSource },
        { label: "Мощность", value: "15 кВт", source: referenceSource },
        { label: "Вход", value: "2 входа", source: referenceSource },
        { label: "Отделка", value: "ремонт от арендатора", source: referenceSource },
        { label: "Инженерия", value: "вентиляционный канал", source: referenceSource },
        { label: "Район", value: "Центральный", source: referenceSource },
        { label: "Метро", value: "Чернышевская", source: referenceSource },
      ],
      highlights: [
        "Исторический центр и узнаваемый фасад",
        "Два входа для гибкой организации помещения",
        "Ремонт от предыдущего арендатора снижает стартовый объём работ",
      ],
      ctaLabel: "Запросить детали",
    },
    {
      id: "komendantskii-55k1",
      eyebrow: "ЖК «YOGA» · Приморский район · метро Комендантский проспект",
      title: "Комендантский пр., 55к1",
      summary: "Готовое помещение в заселённом жилом комплексе «YOGA» с двумя входами, чистовой отделкой и электрической мощностью 35 кВт.",
      sourcePdfs: ["Комендантский 55к1.pdf"],
      image: {
        src: "/images/landing/komendantskii-55k1-p01-img01.webp",
        alt: "Фасад здания на Комендантском проспекте 55к1",
        sourcePdf: "Комендантский 55к1.pdf",
        role: "exterior",
      },
      specs: [
        { label: "Площадь", value: "118,9 м²", source: referenceSource },
        { label: "Потолки", value: "3,5 м", source: referenceSource },
        { label: "Мощность", value: "35 кВт", source: referenceSource },
        { label: "Вход", value: "2 входа", source: referenceSource },
        { label: "Отделка", value: "чистовая", source: referenceSource },
        { label: "Инженерия", value: "вентканал и приточка", source: referenceSource },
        { label: "ЖК", value: "«YOGA»", source: referenceSource },
        { label: "Метро", value: "Комендантский проспект", source: referenceSource },
      ],
      highlights: [
        "Мощность 35 кВт для энергоёмких коммерческих сценариев",
        "Два входа и чистовая отделка",
        "Локация в жилом комплексе с повседневным спросом",
      ],
      ctaLabel: "Запросить детали",
    },
    {
      id: "komendantskii-59k1",
      eyebrow: "ЖК «YOGA» · Приморский район · метро Комендантский проспект",
      title: "Комендантский пр., 59к1",
      summary: "Компактное готовое помещение в ЖК «YOGA» с чистовой отделкой, отдельным входом, приточной инженерией и мощностью 25 кВт.",
      sourcePdfs: ["Комендантский 59к1.pdf"],
      image: {
        src: "/images/landing/komendantskii-59k1-p05-img02.webp",
        alt: "Коммерческий фасад на Комендантском проспекте 59к1",
        sourcePdf: "Комендантский 59к1.pdf",
        role: "exterior",
      },
      specs: [
        { label: "Площадь", value: "84 м²", source: referenceSource },
        { label: "Потолки", value: "3,5 м", source: referenceSource },
        { label: "Мощность", value: "25 кВт", source: referenceSource },
        { label: "Вход", value: "1 вход", source: referenceSource },
        { label: "Отделка", value: "чистовая", source: referenceSource },
        { label: "Инженерия", value: "вентканал и приточка", source: referenceSource },
        { label: "ЖК", value: "«YOGA»", source: referenceSource },
        { label: "Метро", value: "Комендантский проспект", source: referenceSource },
      ],
      highlights: [
        "Компактная площадь для сервиса, ритейла или офиса продаж",
        "Готовая чистовая отделка и отдельный вход",
        "Можно сравнить с соседним объектом 55к1 в том же районе",
      ],
      ctaLabel: "Запросить детали",
    },
    {
      id: "parfenovskaya-9k1",
      eyebrow: "ЖК «Галактика» · Адмиралтейский район · Фрунзенская / Балтийская",
      title: "Парфёновская ул., 9к1",
      summary: "Угловое помещение на первой линии в ЖК «Галактика» с витринными окнами с двух сторон, отдельным входом и двумя мокрыми точками.",
      sourcePdfs: ["Парфёновская 9к1.pdf"],
      image: {
        src: "/images/landing/parfe-novskaya-9k1-p01-img01.webp",
        alt: "Угловой фасад помещения на Парфёновской улице 9 к.1",
        sourcePdf: "Парфёновская 9к1.pdf",
        role: "exterior",
      },
      specs: [
        { label: "Площадь", value: "119,5 м²", source: referenceSource },
        { label: "Потолки", value: "3,2 м", source: referenceSource },
        { label: "Мощность", value: "15 кВт", source: referenceSource },
        { label: "Вход", value: "отдельный", source: referenceSource },
        { label: "Витрины", value: "окна с двух сторон", source: referenceSource },
        { label: "Мокрые точки", value: "2", source: referenceSource },
        { label: "ЖК", value: "«Галактика»", source: referenceSource },
        { label: "Метро", value: "Фрунзенская / Балтийская", source: referenceSource },
      ],
      highlights: [
        "Первая линия и угловое расположение",
        "Витринные окна с двух сторон усиливают видимость",
        "Две мокрые точки расширяют варианты использования",
      ],
      ctaLabel: "Запросить детали",
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
      src: "/images/landing/26-ya-liniya-vo-7-p03-img01.webp",
      alt: "Интерьер помещения на 26-й линии ВО 7",
      sourcePdf: "26-я линия ВО 7.pdf" as SourcePdf,
      role: "interior",
      caption: "26-я линия В.О. 7 · интерьер",
    },
    {
      src: "/images/landing/26-ya-liniya-vo-7-p05-img01.webp",
      alt: "План помещения на 26-й линии ВО 7",
      sourcePdf: "26-я линия ВО 7.pdf" as SourcePdf,
      role: "plan",
      caption: "26-я линия В.О. 7 · планировка",
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
      src: "/images/landing/parfe-novskaya-9k1-p01-img01.webp",
      alt: "Угловая входная группа на Парфёновской улице 9 к.1",
      sourcePdf: "Парфёновская 9к1.pdf" as SourcePdf,
      role: "exterior",
      caption: "Парфёновская 9к1 · угловой вход",
    },
    {
      src: "/images/landing/parfe-novskaya-9k1-p04-img03.webp",
      alt: "План помещения на Парфёновской улице 9 к.1",
      sourcePdf: "Парфёновская 9к1.pdf" as SourcePdf,
      role: "plan",
      caption: "Парфёновская 9к1 · планировка",
    },
  ] satisfies LandingImage[],
  cta: {
    title: "Запросить условия и планировку",
    text: "Расскажем, какие объекты подходят под ваш формат, уточним актуальные условия и подготовим материалы по выбранным адресам.",
    conditions: [
      "Срок аренды от 11 месяцев",
      "Индексация 7% годовых",
      "Назначение — свободное",
      "Возможность увеличения кВт на ряде объектов",
    ],
    actionLabel: "Скачать объединённую презентацию",
    presentationUrl: "/presentations/full.pdf",
  },
};
