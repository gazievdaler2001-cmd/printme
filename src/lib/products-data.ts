// Static product catalog demo data (Phase 0/1). Mirrors the look of the
// reference catalog. In a later phase this is backed by the DB / R2 mockups.

export type ProductCategory =
  | "tshirt"
  | "hoodie"
  | "sweatshirt"
  | "longsleeve"
  | "oversize"
  | "kids";

export interface CatalogProduct {
  id: string;
  nameRu: string;
  nameTg: string;
  descRu: string;
  descTg: string;
  price: number; // in currency units (som)
  category: ProductCategory;
  image: string;
}

const T1 = "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600";
const T2 = "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600";
const H1 = "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600";
const H2 = "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600";
const S1 = "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600";
const L1 = "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600";

export const products: CatalogProduct[] = [
  { id: "tshirt-classic", nameRu: "Футболка Classic", nameTg: "Футболкаи Classic", descRu: "Универсальная футболка на каждый день", descTg: "Футболкаи универсалӣ барои ҳар рӯз", price: 249, category: "tshirt", image: T1 },
  { id: "hoodie-classic", nameRu: "Худи Classic", nameTg: "Худии Classic", descRu: "Мягкое и тёплое худи с капюшоном", descTg: "Худии нарм ва гарм бо капюшон", price: 699, category: "hoodie", image: H1 },
  { id: "tshirt-oversize", nameRu: "Футболка Oversize", nameTg: "Футболкаи Oversize", descRu: "Свободный крой для твоего стиля", descTg: "Буриши озод барои услуби ту", price: 349, category: "oversize", image: T2 },
  { id: "hoodie-oversize", nameRu: "Худи Oversize", nameTg: "Худии Oversize", descRu: "Стильное худи свободного кроя", descTg: "Худии шево бо буриши озод", price: 749, category: "oversize", image: H2 },
  { id: "sweatshirt-classic", nameRu: "Свитшот Classic", nameTg: "Свитшоти Classic", descRu: "Удобный свитшот на каждый день", descTg: "Свитшоти қулай барои ҳар рӯз", price: 549, category: "sweatshirt", image: S1 },
  { id: "longsleeve-classic", nameRu: "Лонгслив Classic", nameTg: "Лонгсливи Classic", descRu: "Лёгкий и комфортный лонгслив", descTg: "Лонгсливи сабук ва қулай", price: 349, category: "longsleeve", image: L1 },
  { id: "tshirt-oversize-2", nameRu: "Футболка Oversize", nameTg: "Футболкаи Oversize", descRu: "Трендовый оверсайз для любого образа", descTg: "Оверсайзи трендӣ барои ҳар намуд", price: 399, category: "oversize", image: T1 },
  { id: "hoodie-classic-2", nameRu: "Худи Classic", nameTg: "Худии Classic", descRu: "Тёплое худи для прохладной погоды", descTg: "Худии гарм барои ҳавои салқин", price: 699, category: "hoodie", image: H1 },
  { id: "kids-tshirt", nameRu: "Детская футболка", nameTg: "Футболкаи кӯдакона", descRu: "Мягкая футболка для детей", descTg: "Футболкаи нарм барои кӯдакон", price: 199, category: "kids", image: T2 },
  { id: "kids-hoodie", nameRu: "Детское худи", nameTg: "Худии кӯдакона", descRu: "Удобное худи для детей", descTg: "Худии қулай барои кӯдакон", price: 599, category: "kids", image: H2 },
  { id: "sweatshirt-oversize", nameRu: "Свитшот Oversize", nameTg: "Свитшоти Oversize", descRu: "Свободный свитшот для твоего стиля", descTg: "Свитшоти озод барои услуби ту", price: 599, category: "oversize", image: S1 },
  { id: "longsleeve-oversize", nameRu: "Лонгслив Oversize", nameTg: "Лонгсливи Oversize", descRu: "Стильный лонгслив свободного кроя", descTg: "Лонгсливи шево бо буриши озод", price: 399, category: "longsleeve", image: L1 },
];

export const catalogColors = ["#ffffff", "#000000", "#e8d9b5", "#1e3a5f", "#c0392b", "#1e5631", "#f5a3c7", "#cdb4ff"];
export const catalogSizes = ["XS", "S", "M", "L", "XL", "XXL"];
