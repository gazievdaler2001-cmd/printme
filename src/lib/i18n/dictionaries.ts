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
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroCta: string;
    howItWorks: string;
    advantages: string;
    examples: string;
    packaging: string;
    reviews: string;
  };
  common: {
    createSimilar: string;
    addToCart: string;
    price: string;
    color: string;
    size: string;
    printSize: string;
    soon: string;
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
  },
  home: {
    heroTitle: "Создай свой дизайн с помощью ИИ",
    heroSubtitle:
      "Опиши идею — увидь её на футболке или худи за секунды. Мы напечатаем и доставим.",
    heroCta: "Создать дизайн",
    howItWorks: "Как это работает",
    advantages: "Преимущества",
    examples: "Примеры дизайнов",
    packaging: "Упаковка, которой хочется делиться",
    reviews: "Отзывы",
  },
  common: {
    createSimilar: "Создать такой дизайн",
    addToCart: "Добавить в корзину",
    price: "Цена",
    color: "Цвет одежды",
    size: "Размер одежды",
    printSize: "Размер принта",
    soon: "Скоро",
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
  },
  home: {
    heroTitle: "Тарроҳии худро бо ёрии СИ созед",
    heroSubtitle:
      "Идеяро тавсиф кунед — онро дар сонияҳо дар футболка ё худӣ бинед. Мо чоп карда мерасонем.",
    heroCta: "Сохтани тарроҳӣ",
    howItWorks: "Чӣ тавр кор мекунад",
    advantages: "Бартариҳо",
    examples: "Намунаҳои тарроҳӣ",
    packaging: "Бастабандие, ки мехоҳед мубодила кунед",
    reviews: "Шарҳҳо",
  },
  common: {
    createSimilar: "Чунин тарроҳӣ созед",
    addToCart: "Ба сабад илова кунед",
    price: "Нарх",
    color: "Ранги либос",
    size: "Андозаи либос",
    printSize: "Андозаи чоп",
    soon: "Ба зудӣ",
  },
};

const dictionaries: Record<Locale, Dictionary> = { ru, tg };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
