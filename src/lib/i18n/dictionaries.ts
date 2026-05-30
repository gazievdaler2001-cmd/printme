import type { Locale } from "./config";

// Flat dictionaries for the MVP. As the surface grows these can be split
// per-page or moved to JSON / a translation service.

export interface Dictionary {
  nav: {
    home: string;
    catalog: string;
    studio: string;
    about: string;
    shipping: string;
    cart: string;
    login: string;
  };
  common: {
    createDesign: string;
    createSimilar: string;
    addToCart: string;
    saveDesign: string;
    viewAll: string;
    showMore: string;
    price: string;
    color: string;
    size: string;
    printSize: string;
    soon: string;
    fast: string;
    simple: string;
    unique: string;
    writeUs: string;
  };
  home: {
    heroTitle1: string;
    heroAccent: string;
    heroSubtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    heroFeatures: string[];
    heroGenLabel: string;
    heroGenPlaceholder: string;
    heroColorLabel: string;
    heroSizeLabel: string;
    generate: string;
    howTitle: string;
    howAccent: string;
    steps: { title: string; desc: string }[];
    examplesTitle: string;
    examplesAccent: string;
    examplesViewAll: string;
    examples: string[];
    advantagesTitle: string;
    advantagesAccent: string;
    advantages: { title: string; desc: string }[];
    packagingTitle: string;
    packagingText: string;
    packagingItems: string[];
    stats: { value: string; label: string }[];
    reviewsTitle: string;
    reviewsAccent: string;
    reviewsViewAll: string;
    reviews: { name: string; handle: string; product: string; text: string; rating: number }[];
    finalTitle: string;
    finalText: string;
  };
  about: {
    title: string;
    headline1: string;
    headlineAccent1: string;
    headline2: string;
    headlineAccent2: string;
    headline3: string;
    description: string;
    values: { title: string; desc: string }[];
    timelineTitle: string;
    timeline: { year: string; title: string; desc: string }[];
    teamTitle: string;
    teamSubtitle: string;
    team: { name: string; role: string; desc: string }[];
    ctaTitle: string;
    ctaSubtitle: string;
  };
  catalog: {
    title: string;
    subtitle: string;
    promoTitle: string;
    promoSubtitle: string;
    tabs: string[];
    sort: string;
    filterType: string;
    filterColor: string;
    filterSize: string;
    filterPrice: string;
    sizeTable: string;
    notFoundTitle: string;
    notFoundSubtitle: string;
    currency: string;
  };
  studio: {
    aiTab: string;
    simpleTab: string;
    aiTitle: string;
    promptLabel: string;
    promptPlaceholder: string;
    styleTitle: string;
    styles: string[];
    ratioTitle: string;
    generationsLeft: string;
    or: string;
    uploadImage: string;
    uploadHint: string;
    rail: string[];
    save: string;
    download: string;
    previewColors: string;
    productColor: string;
    productSize: string;
    printPosition: string;
    total: string;
    currency: string;
    features: { title: string; desc: string }[];
  };
  shipping: {
    title: string;
    subtitle: string;
    blocks: { title: string; desc: string }[];
  };
  footer: {
    tagline: string;
    menu: string;
    help: string;
    socials: string;
    faq: string;
    returns: string;
    terms: string;
    privacy: string;
    rights: string;
  };
}

const ru: Dictionary = {
  nav: {
    home: "Главная",
    catalog: "Каталог",
    studio: "Создать дизайн",
    about: "О нас",
    shipping: "Доставка и оплата",
    cart: "Корзина",
    login: "Войти",
  },
  common: {
    createDesign: "Создать дизайн",
    createSimilar: "Создать такой дизайн",
    addToCart: "Добавить в корзину",
    saveDesign: "Сохранить дизайн",
    viewAll: "Смотреть все",
    showMore: "Показать ещё",
    price: "Цена",
    color: "Цвет изделия",
    size: "Размер",
    printSize: "Размер принта",
    soon: "Скоро",
    fast: "Быстро",
    simple: "Просто",
    unique: "Уникально",
    writeUs: "Написать нам",
  },
  home: {
    heroTitle1: "Создай свой уникальный",
    heroAccent: "дизайн одежды",
    heroSubtitle:
      "Загрузи фото, напиши идею или доверься AI — мы создадим дизайн, который будет только твоим. Смотри результат на футболке или худи и заказывай печать.",
    ctaPrimary: "Создать дизайн",
    ctaSecondary: "Посмотреть примеры",
    heroFeatures: [
      "AI дизайн за секунды",
      "Премиум качество печати",
      "Быстрая доставка",
      "Лёгкий процесс создания",
    ],
    heroGenLabel: "AI генератор",
    heroGenPlaceholder: "Опиши идею для дизайна…",
    heroColorLabel: "Цвет футболки",
    heroSizeLabel: "Размер",
    generate: "Сгенерировать",
    howTitle: "Как это",
    howAccent: "работает",
    steps: [
      { title: "Загрузи фото или напиши идею", desc: "Начни с фотографии или введи описание" },
      { title: "AI создаст или изменит изображение", desc: "Искусственный интеллект сгенерирует уникальный дизайн" },
      { title: "Размести дизайн на одежде", desc: "Выбери одежду, цвет и настрой положение" },
      { title: "Получи готовый заказ", desc: "Мы напечатаем, упакуем и доставим" },
    ],
    examplesTitle: "Примеры",
    examplesAccent: "дизайнов",
    examplesViewAll: "Смотреть все примеры",
    examples: ["Самурай", "Аниме", "Киберпанк", "Машины", "Горы", "Космос"],
    advantagesTitle: "Почему",
    advantagesAccent: "PrintMe",
    advantages: [
      { title: "AI генерация", desc: "Уникальные дизайны за несколько секунд" },
      { title: "Премиальная печать", desc: "Яркие цвета и высокая детализация" },
      { title: "Быстрая доставка", desc: "Доставляем заказы по городу каждый день" },
      { title: "Упаковка с эмоцией", desc: "Каждый заказ приходит как подарок" },
    ],
    packagingTitle: "Распаковка как часть эмоции",
    packagingText:
      "Мы уделяем внимание каждой детали. Коробка, стикеры, открытка с благодарностью и QR-код на наши соцсети — каждый заказ приходит как подарок.",
    packagingItems: ["Thank you card", "Стикеры", "QR Instagram", "QR Telegram"],
    stats: [
      { value: "2 500+", label: "Довольных клиентов" },
      { value: "15 000+", label: "Созданных дизайнов" },
      { value: "24 часа", label: "Среднее время доставки" },
      { value: "4.9 / 5", label: "Средняя оценка" },
    ],
    reviewsTitle: "Что говорят",
    reviewsAccent: "клиенты",
    reviewsViewAll: "Смотреть все отзывы",
    reviews: [
      { name: "Алишер", handle: "@alisher_tm", product: "Футболка с самураем", rating: 5, text: "Сделал дизайн за минуту — получил сотни комплиментов. Качество супер!" },
      { name: "Мадина", handle: "@madina.a", product: "Худи с аниме", rating: 5, text: "Это лучший подарок для моего парня! Он был в восторге." },
      { name: "Тимур", handle: "@timur.kg", product: "Худи киберпанк", rating: 5, text: "Очень удобный конструктор и быстрая доставка. Буду заказывать ещё!" },
    ],
    finalTitle: "Твой дизайн. Твоя история.",
    finalText: "Создай уникальную одежду уже сегодня.",
  },
  about: {
    title: "О нас",
    headline1: "Мы превращаем ваши",
    headlineAccent1: "идеи",
    headline2: "в",
    headlineAccent2: "уникальные",
    headline3: "вещи",
    description:
      "PrintMe — это сервис кастомной печати на одежде. Вы создаёте дизайн — мы печатаем, упаковываем и доставляем с заботой.",
    values: [
      { title: "Уникальность", desc: "Каждый дизайн создаётся специально для вас" },
      { title: "Качество", desc: "Используем лучшие материалы и стойкие принты" },
      { title: "Забота", desc: "Упаковываем с любовью и доставляем вовремя" },
    ],
    timelineTitle: "Наш путь",
    timeline: [
      { year: "2022", title: "Идея", desc: "Мы начали с простой идеи — дать каждому возможность носить то, что он создал сам." },
      { year: "2023", title: "Первые принты", desc: "Напечатали наши первые заказы и поняли, что движемся в правильном направлении." },
      { year: "2024", title: "Тысячи клиентов", desc: "Больше клиентов, больше идей и ещё больше уникальных дизайнов каждый день." },
      { year: "2025 и дальше", title: "С вами", desc: "Мы продолжаем расти, улучшать сервис и радовать вас каждый день." },
    ],
    teamTitle: "Наша команда",
    teamSubtitle: "Небольшая команда, которая делает большое дело",
    team: [
      { name: "Азамат", role: "Основатель", desc: "Отвечает за идею, стратегию и развитие сервиса." },
      { name: "Малика", role: "Дизайн и продукт", desc: "Делает так, чтобы создавать дизайны было легко и приятно." },
      { name: "Нурлан", role: "Производство", desc: "Следит за качеством печати и материалами." },
      { name: "Айгерим", role: "Забота о клиентах", desc: "Всегда на связи и готова помочь с вашим заказом." },
      { name: "Данияр", role: "Логистика", desc: "Организует доставку, чтобы всё было вовремя." },
    ],
    ctaTitle: "Спасибо, что вы с нами!",
    ctaSubtitle: "Каждый ваш заказ — это вдохновение для нас становиться лучше.",
  },
  catalog: {
    title: "Каталог товаров",
    subtitle: "Выбери товар и создай свой уникальный дизайн",
    promoTitle: "Скидка 10% на первый заказ",
    promoSubtitle: "Создай дизайн прямо сейчас",
    tabs: ["Все товары", "Футболки", "Худи", "Свитшоты", "Лонгсливы", "Оверсайз", "Детские"],
    sort: "Сначала популярные",
    filterType: "Тип товара",
    filterColor: "Цвет",
    filterSize: "Размер",
    filterPrice: "Цена",
    sizeTable: "Таблица размеров",
    notFoundTitle: "Не нашёл, что искал?",
    notFoundSubtitle: "Напиши нам, и мы добавим нужный товар в каталог",
    currency: "сом",
  },
  studio: {
    aiTab: "AI-редактор",
    simpleTab: "Простой редактор",
    aiTitle: "Создать с помощью ИИ",
    promptLabel: "Опишите, что хотите создать",
    promptPlaceholder: "Киберпанк город с неоновыми огнями, ночь, дождь",
    styleTitle: "Стиль изображения",
    styles: ["Киберпанк", "Аниме", "Реализм", "Минимализм", "Абстракция", "Фэнтези"],
    ratioTitle: "Соотношение сторон",
    generationsLeft: "Осталось генераций:",
    or: "или",
    uploadImage: "Загрузить изображение",
    uploadHint: "JPG, PNG, до 10MB",
    rail: ["Дизайн", "Текст", "Загрузки", "Иконки", "Фильтры", "AI-редактор"],
    save: "Сохранить",
    download: "Скачать",
    previewColors: "Предпросмотр в других цветах",
    productColor: "Цвет изделия",
    productSize: "Размер",
    printPosition: "Позиция и размер принта",
    total: "Итого",
    currency: "сомони",
    features: [
      { title: "Премиум качество", desc: "Стойкие принты и лучшие материалы" },
      { title: "Удобная доставка", desc: "По городу каждый день" },
      { title: "Упаковка с эмоцией", desc: "Каждый заказ как подарок" },
      { title: "Нужна помощь?", desc: "Мы на связи 24/7" },
    ],
  },
  shipping: {
    title: "Доставка и оплата",
    subtitle: "Всё просто и удобно — от заказа до распаковки",
    blocks: [
      { title: "Доставка по городу", desc: "Каждый день, обычно 1–3 дня после готовности заказа." },
      { title: "Доставка по стране", desc: "Отправляем удобной службой, сроки зависят от региона." },
      { title: "Оплата", desc: "Менеджер свяжется с вами после заказа и подскажет удобный способ оплаты." },
      { title: "Возврат и обмен", desc: "Поскольку дизайн уникальный, обмен возможен только при браке." },
    ],
  },
  footer: {
    tagline: "Создавай. Печатай. Выделяйся.",
    menu: "Меню",
    help: "Помощь",
    socials: "Мы в соцсетях",
    faq: "FAQ",
    returns: "Возврат и обмен",
    terms: "Условия использования",
    privacy: "Политика конфиденциальности",
    rights: "Все права защищены.",
  },
};

const tg: Dictionary = {
  nav: {
    home: "Асосӣ",
    catalog: "Каталог",
    studio: "Сохтани тарроҳӣ",
    about: "Дар бораи мо",
    shipping: "Расонидан ва пардохт",
    cart: "Сабад",
    login: "Ворид шудан",
  },
  common: {
    createDesign: "Сохтани тарроҳӣ",
    createSimilar: "Чунин тарроҳӣ созед",
    addToCart: "Ба сабад илова кунед",
    saveDesign: "Тарроҳиро нигоҳ доред",
    viewAll: "Ҳамаро дидан",
    showMore: "Бештар нишон додан",
    price: "Нарх",
    color: "Ранги либос",
    size: "Андоза",
    printSize: "Андозаи чоп",
    soon: "Ба зудӣ",
    fast: "Тез",
    simple: "Содда",
    unique: "Беназир",
    writeUs: "Ба мо нависед",
  },
  home: {
    heroTitle1: "Тарроҳии беназири",
    heroAccent: "либоси худро бисоз",
    heroSubtitle:
      "Расмро бор кун, идея нависед ё ба AI бовар кунед — мо тарроҳие месозем, ки танҳо аз они ту хоҳад буд. Натиҷаро дар футболка ё худӣ бубин ва чопро фармоиш деҳ.",
    ctaPrimary: "Тарроҳӣ сохтан",
    ctaSecondary: "Намунаҳоро дидан",
    heroFeatures: [
      "AI тарроҳӣ дар сонияҳо",
      "Сифати олии чоп",
      "Расонидани тез",
      "Раванди осони сохтан",
    ],
    heroGenLabel: "AI генератор",
    heroGenPlaceholder: "Идеяи тарроҳиро тавсиф кунед…",
    heroColorLabel: "Ранги футболка",
    heroSizeLabel: "Андоза",
    generate: "Эҷод кардан",
    howTitle: "Чӣ тавр кор",
    howAccent: "мекунад",
    steps: [
      { title: "Расм бор кун ё идея нависед", desc: "Аз расм оғоз кунед ё тавсиф ворид кунед" },
      { title: "AI тасвирро месозад ё тағйир медиҳад", desc: "Зеҳни сунъӣ тарроҳии беназир эҷод мекунад" },
      { title: "Тарроҳиро дар либос ҷойгир кун", desc: "Либос, ранг интихоб кунед ва мавқеъро танзим кунед" },
      { title: "Фармоиши тайёрро бигир", desc: "Мо чоп, баста ва мерасонем" },
    ],
    examplesTitle: "Намунаҳои",
    examplesAccent: "тарроҳӣ",
    examplesViewAll: "Ҳамаи намунаҳоро дидан",
    examples: ["Самурай", "Аниме", "Киберпанк", "Мошинҳо", "Кӯҳҳо", "Кайҳон"],
    advantagesTitle: "Чаро",
    advantagesAccent: "PrintMe",
    advantages: [
      { title: "AI эҷод", desc: "Тарроҳиҳои беназир дар чанд сония" },
      { title: "Чопи олӣ", desc: "Рангҳои равшан ва тафсилоти баланд" },
      { title: "Расонидани тез", desc: "Фармоишҳоро ҳар рӯз дар шаҳр мерасонем" },
      { title: "Бастабандии хотирмон", desc: "Ҳар фармоиш мисли тӯҳфа меояд" },
    ],
    packagingTitle: "Кушодани баста қисми эҳсос аст",
    packagingText:
      "Мо ба ҳар ҷузъиёт диққат медиҳем. Қуттӣ, стикерҳо, варақаи миннатдорӣ ва QR-код ба шабакаҳои мо — ҳар фармоиш мисли тӯҳфа меояд.",
    packagingItems: ["Thank you card", "Стикерҳо", "QR Instagram", "QR Telegram"],
    stats: [
      { value: "2 500+", label: "Мизоҷони розӣ" },
      { value: "15 000+", label: "Тарроҳиҳои сохташуда" },
      { value: "24 соат", label: "Вақти миёнаи расонидан" },
      { value: "4.9 / 5", label: "Баҳои миёна" },
    ],
    reviewsTitle: "Мизоҷон чӣ",
    reviewsAccent: "мегӯянд",
    reviewsViewAll: "Ҳамаи шарҳҳоро дидан",
    reviews: [
      { name: "Алишер", handle: "@alisher_tm", product: "Футболка бо самурай", rating: 5, text: "Тарроҳиро дар як дақиқа сохтам — садҳо таъриф гирифтам. Сифат аъло!" },
      { name: "Мадина", handle: "@madina.a", product: "Худӣ бо аниме", rating: 5, text: "Ин беҳтарин тӯҳфа барои дӯстам буд! Ӯ хеле хурсанд шуд." },
      { name: "Тимур", handle: "@timur.kg", product: "Худӣ киберпанк", rating: 5, text: "Конструктори хеле қулай ва расонидани тез. Боз фармоиш медиҳам!" },
    ],
    finalTitle: "Тарроҳии ту. Достони ту.",
    finalText: "Либоси беназирро ҳамин имрӯз бисоз.",
  },
  about: {
    title: "Дар бораи мо",
    headline1: "Мо идеяҳои шуморо ба",
    headlineAccent1: "ашёҳои",
    headline2: "",
    headlineAccent2: "беназир",
    headline3: "табдил медиҳем",
    description:
      "PrintMe — хидмати чопи фармоишӣ дар либос аст. Шумо тарроҳӣ месозед — мо чоп, баста ва бо ғамхорӣ мерасонем.",
    values: [
      { title: "Беназирӣ", desc: "Ҳар тарроҳӣ махсус барои шумо сохта мешавад" },
      { title: "Сифат", desc: "Маводи беҳтарин ва чопҳои устуворро истифода мебарем" },
      { title: "Ғамхорӣ", desc: "Бо муҳаббат баста ва саривақт мерасонем" },
    ],
    timelineTitle: "Роҳи мо",
    timeline: [
      { year: "2022", title: "Идея", desc: "Мо аз идеяи содда оғоз кардем — ба ҳар кас имкони пӯшидани он чиро, ки худаш сохтааст, диҳем." },
      { year: "2023", title: "Чопҳои аввал", desc: "Фармоишҳои аввалро чоп кардем ва фаҳмидем, ки роҳи дуруст меравем." },
      { year: "2024", title: "Ҳазорон мизоҷ", desc: "Бештар мизоҷон, бештар идеяҳо ва ҳар рӯз тарроҳиҳои беназир." },
      { year: "2025 ва минбаъд", title: "Бо шумо", desc: "Мо рушд мекунем, хидматро беҳтар мекунем ва шуморо ҳар рӯз шод мекунем." },
    ],
    teamTitle: "Дастаи мо",
    teamSubtitle: "Дастаи хурд, ки кори бузург мекунад",
    team: [
      { name: "Азамат", role: "Асосгузор", desc: "Барои идея, стратегия ва рушди хидмат масъул аст." },
      { name: "Малика", role: "Тарроҳӣ ва маҳсулот", desc: "Сохтани тарроҳиҳоро осон ва форам мегардонад." },
      { name: "Нурлан", role: "Истеҳсолот", desc: "Сифати чоп ва маводро назорат мекунад." },
      { name: "Айгерим", role: "Ғамхории мизоҷон", desc: "Ҳамеша дар тамос ва омодаи кӯмак аст." },
      { name: "Данияр", role: "Логистика", desc: "Расониданро ташкил мекунад, то ҳама саривақт бошад." },
    ],
    ctaTitle: "Ташаккур, ки бо мо ҳастед!",
    ctaSubtitle: "Ҳар фармоиши шумо барои мо илҳоми беҳтар шудан аст.",
  },
  catalog: {
    title: "Каталоги молҳо",
    subtitle: "Молро интихоб кунед ва тарроҳии беназири худро созед",
    promoTitle: "Тахфифи 10% барои фармоиши аввал",
    promoSubtitle: "Ҳозир тарроҳӣ созед",
    tabs: ["Ҳама молҳо", "Футболкаҳо", "Худӣ", "Свитшотҳо", "Лонгсливҳо", "Оверсайз", "Кӯдакона"],
    sort: "Аввал маъмултарин",
    filterType: "Намуди мол",
    filterColor: "Ранг",
    filterSize: "Андоза",
    filterPrice: "Нарх",
    sizeTable: "Ҷадвали андозаҳо",
    notFoundTitle: "Он чиро, ки меҷустед, наёфтед?",
    notFoundSubtitle: "Ба мо нависед ва мо моли заруриро ба каталог илова мекунем",
    currency: "сом",
  },
  studio: {
    aiTab: "AI-муҳаррир",
    simpleTab: "Муҳаррири содда",
    aiTitle: "Бо ёрии СИ созед",
    promptLabel: "Тавсиф кунед, ки чӣ сохтан мехоҳед",
    promptPlaceholder: "Шаҳри киберпанк бо чароғҳои неонӣ, шаб, борон",
    styleTitle: "Услуби тасвир",
    styles: ["Киберпанк", "Аниме", "Реализм", "Минимализм", "Абстраксия", "Фэнтези"],
    ratioTitle: "Таносуби тарафҳо",
    generationsLeft: "Эҷодҳои боқимонда:",
    or: "ё",
    uploadImage: "Тасвирро бор кунед",
    uploadHint: "JPG, PNG, то 10MB",
    rail: ["Тарроҳӣ", "Матн", "Боргузориҳо", "Нишонаҳо", "Филтрҳо", "AI-муҳаррир"],
    save: "Нигоҳ доштан",
    download: "Боргирӣ",
    previewColors: "Пешнамоиш дар рангҳои дигар",
    productColor: "Ранги либос",
    productSize: "Андоза",
    printPosition: "Мавқеъ ва андозаи чоп",
    total: "Ҳамагӣ",
    currency: "сомонӣ",
    features: [
      { title: "Сифати олӣ", desc: "Чопҳои устувор ва маводи беҳтарин" },
      { title: "Расонидани қулай", desc: "Дар шаҳр ҳар рӯз" },
      { title: "Бастабандии хотирмон", desc: "Ҳар фармоиш мисли тӯҳфа" },
      { title: "Кӯмак лозим аст?", desc: "Мо 24/7 дар тамос ҳастем" },
    ],
  },
  shipping: {
    title: "Расонидан ва пардохт",
    subtitle: "Ҳама чиз содда ва қулай — аз фармоиш то кушодани баста",
    blocks: [
      { title: "Расонидан дар шаҳр", desc: "Ҳар рӯз, одатан 1–3 рӯз пас аз тайёр шудани фармоиш." },
      { title: "Расонидан дар кишвар", desc: "Бо хидмати қулай мефиристем, мӯҳлат аз минтақа вобаста аст." },
      { title: "Пардохт", desc: "Менеҷер пас аз фармоиш бо шумо тамос мегирад ва тарзи қулайи пардохтро мегӯяд." },
      { title: "Бозгашт ва иваз", desc: "Азбаски тарроҳӣ беназир аст, иваз танҳо ҳангоми нуқс имконпазир аст." },
    ],
  },
  footer: {
    tagline: "Бисоз. Чоп кун. Фарқ кун.",
    menu: "Меню",
    help: "Кӯмак",
    socials: "Мо дар шабакаҳо",
    faq: "FAQ",
    returns: "Бозгашт ва иваз",
    terms: "Шартҳои истифода",
    privacy: "Сиёсати махфият",
    rights: "Ҳамаи ҳуқуқҳо ҳифз шудаанд.",
  },
};

const dictionaries: Record<Locale, Dictionary> = { ru, tg };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
