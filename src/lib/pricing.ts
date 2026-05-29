import type { ProductType } from "@prisma/client";

// ------------------------------------------------------------------
// Pricing logic. Base prices live on the Product table; print size adds
// a surcharge. Kept pure so it can be reused on client and server.
// ------------------------------------------------------------------

export type PrintSize = "S" | "M" | "L";

const BASE_PRICE: Record<ProductType, number> = {
  TSHIRT: 12000,
  HOODIE: 28000,
};

const PRINT_SIZE_SURCHARGE: Record<PrintSize, number> = {
  S: 0,
  M: 2000,
  L: 4000,
};

export interface PriceInput {
  productType: ProductType;
  printSize: PrintSize;
}

/** Returns the total price in minor currency units. */
export function calculatePrice({ productType, printSize }: PriceInput): number {
  return BASE_PRICE[productType] + PRINT_SIZE_SURCHARGE[printSize];
}

/** Format minor units into a display string (somoni by default). */
export function formatPrice(amount: number, currency = "TJS"): string {
  const major = amount / 100;
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(major);
}
