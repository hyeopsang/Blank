import type { Product } from "@/features/product/model/product.types";

import { ProductCard } from "./product-card";

interface ProductListGridProps {
  products: Product[];
}

export function ProductListGrid({ products }: ProductListGridProps) {
  if (products.length === 0) {
    return (
      <section className="rounded-2xl border border-dashed border-gray-300 px-6 py-16 text-center">
        <h2 className="text-lg font-semibold">검색 결과가 없습니다</h2>
        <p className="mt-2 text-sm text-gray-600">
          검색어나 필터 조건을 변경해보세요.
        </p>
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
