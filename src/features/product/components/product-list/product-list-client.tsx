"use client";

import type { Product } from "@/features/product/model/product.types";
import { useProductList } from "@/features/product/hooks/useProductList";

import { ProductListFilters } from "./product-list-filters";
import { ProductListGrid } from "./product-list-grid";
import { ProductListHeader } from "./product-list-header";

interface ProductListClientProps {
  products: Product[];
}

export function ProductListClient({ products }: ProductListClientProps) {
  const {
    filters,
    products: visibleProducts,
    updateFilter,
    updateSort,
    resetFilters,
  } = useProductList(products);

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <ProductListHeader />

      <ProductListFilters
        filters={filters}
        totalCount={visibleProducts.length}
        updateFilter={updateFilter}
        updateSort={updateSort}
        resetFilters={resetFilters}
      />

      <ProductListGrid products={visibleProducts} />
    </main>
  );
}
