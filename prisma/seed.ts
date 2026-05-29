import { PrismaClient, ProductType } from "@prisma/client";

const prisma = new PrismaClient();

const SHIRT_COLORS = ["#ffffff", "#000000", "#1a1a1a", "#e5e5e5", "#0a3d62", "#ff4d2e"];
const SIZES = ["S", "M", "L", "XL", "XXL"];

async function main() {
  // --- Products ---
  await prisma.product.upsert({
    where: { type: ProductType.TSHIRT },
    update: {},
    create: {
      type: ProductType.TSHIRT,
      nameRu: "Футболка",
      nameTg: "Футболка",
      basePrice: 12000,
      colors: SHIRT_COLORS,
      sizes: SIZES,
    },
  });

  await prisma.product.upsert({
    where: { type: ProductType.HOODIE },
    update: {},
    create: {
      type: ProductType.HOODIE,
      nameRu: "Худи",
      nameTg: "Худӣ",
      basePrice: 28000,
      colors: SHIRT_COLORS,
      sizes: SIZES,
    },
  });

  // --- Catalog examples (ru + tg prompts per TZ) ---
  await prisma.catalogItem.deleteMany(); // keep seed idempotent
  const catalog = [
    {
      title: "Самурай на фоне красного солнца",
      promptRu: "Самурай в традиционных доспехах на фоне огромного красного солнца, минимализм, японский стиль",
      promptTg: "Самурай дар зиреҳи анъанавӣ дар заминаи офтоби бузурги сурх, минимализм, услуби японӣ",
      mockupUrl: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800",
      order: 1,
    },
    {
      title: "Котик минимализм",
      promptRu: "Минималистичный кот, тонкие линии, чёрно-белый, современный дизайн",
      promptTg: "Гурбаи минималистӣ, хатҳои борик, сиёҳу сафед, тарроҳии муосир",
      mockupUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800",
      order: 2,
    },
    {
      title: "Горы и солнце",
      promptRu: "Горный пейзаж с восходящим солнцем, плоский векторный стиль, тёплые тона",
      promptTg: "Манзараи кӯҳӣ бо офтоби тулӯъкунанда, услуби векторӣ, рангҳои гарм",
      mockupUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
      order: 3,
    },
    {
      title: "Космонавт",
      promptRu: "Космонавт в открытом космосе, неоновые цвета, киберпанк",
      promptTg: "Кайҳоннавард дар кайҳон, рангҳои неонӣ, киберпанк",
      mockupUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800",
      order: 4,
    },
    {
      title: "Сакура",
      promptRu: "Ветка цветущей сакуры, акварель, нежные розовые тона, минимализм",
      promptTg: "Шохаи гелоси шукуфта, обуранг, рангҳои нозуки гулобӣ, минимализм",
      mockupUrl: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800",
      order: 5,
    },
  ];

  for (const item of catalog) {
    await prisma.catalogItem.create({ data: item });
  }

  console.log("✅ Seed complete:", {
    products: 2,
    catalogItems: catalog.length,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
