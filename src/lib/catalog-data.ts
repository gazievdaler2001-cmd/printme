// Static catalog demo data so the catalog renders without a database in
// Phase 0. In Phase 1 this is replaced by a Prisma query (CatalogItem),
// and the seed (prisma/seed.ts) mirrors these entries.

export interface CatalogEntry {
  id: string;
  title: string;
  promptRu: string;
  promptTg: string;
  mockupUrl: string;
}

export const catalogData: CatalogEntry[] = [
  {
    id: "samurai",
    title: "Самурай на фоне красного солнца",
    promptRu:
      "Самурай в традиционных доспехах на фоне огромного красного солнца, минимализм, японский стиль",
    promptTg:
      "Самурай дар зиреҳи анъанавӣ дар заминаи офтоби бузурги сурх, минимализм, услуби японӣ",
    mockupUrl:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800",
  },
  {
    id: "cat-minimal",
    title: "Котик минимализм",
    promptRu: "Минималистичный кот, тонкие линии, чёрно-белый, современный дизайн",
    promptTg: "Гурбаи минималистӣ, хатҳои борик, сиёҳу сафед, тарроҳии муосир",
    mockupUrl:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800",
  },
  {
    id: "mountains",
    title: "Горы и солнце",
    promptRu: "Горный пейзаж с восходящим солнцем, плоский векторный стиль, тёплые тона",
    promptTg: "Манзараи кӯҳӣ бо офтоби тулӯъкунанда, услуби векторӣ, рангҳои гарм",
    mockupUrl:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
  },
  {
    id: "astronaut",
    title: "Космонавт",
    promptRu: "Космонавт в открытом космосе, неоновые цвета, киберпанк",
    promptTg: "Кайҳоннавард дар кайҳон, рангҳои неонӣ, киберпанк",
    mockupUrl:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800",
  },
  {
    id: "sakura",
    title: "Сакура",
    promptRu: "Ветка цветущей сакуры, акварель, нежные розовые тона, минимализм",
    promptTg: "Шохаи гелоси шукуфта, обуранг, рангҳои нозуки гулобӣ, минимализм",
    mockupUrl:
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800",
  },
];
