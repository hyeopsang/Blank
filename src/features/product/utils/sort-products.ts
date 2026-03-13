import type { Product } from "@/features/product/model/product.types";
import type { ProductSort } from "@/features/filter/model/filter.types";

export function sortProducts(
  products: Product[],
  sort: ProductSort = "latest",
): Product[] {
  const copied = [...products];

  switch (sort) {
    case "price_asc":
      return copied.sort((a, b) => a.basePrice - b.basePrice);

    case "price_desc":
      return copied.sort((a, b) => b.basePrice - a.basePrice);

    case "latest":
    default:
      return copied;
  }
}
