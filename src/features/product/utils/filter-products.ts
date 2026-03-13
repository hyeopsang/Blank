import type { Product } from "@/features/product/model/product.types";
import type { ProductListFilter } from "@/features/filter/model/filter.types";

export function filterProducts(
  products: Product[],
  filters: ProductListFilter,
): Product[] {
  return products.filter((product) => {
    const matchesQuery = filters.q
      ? product.name.toLowerCase().includes(filters.q.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(filters.q.toLowerCase())
      : true;

    const matchesColor = filters.color
      ? product.variants.some((variant) => variant.color === filters.color)
      : true;

    const matchesSize = filters.size
      ? product.variants.some((variant) => variant.size === filters.size)
      : true;

    const matchesFit = filters.fit
      ? product.variants.some((variant) => variant.fit === filters.fit)
      : true;

    return matchesQuery && matchesColor && matchesSize && matchesFit;
  });
}
