import Link from "next/link";

import type { Product } from "@/features/product/model/product.types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="rounded-2xl border border-gray-200 p-5 transition hover:shadow-md"
    >
      <div className="mb-4 aspect-4/5 rounded-xl bg-gray-100" />
      <div className="space-y-2">
        <p className="text-xs text-gray-500">{product.tags.join(" · ")}</p>
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.shortDescription}</p>
        <p className="pt-2 text-base font-medium">
          ₩{product.basePrice.toLocaleString()}
        </p>
      </div>
    </Link>
  );
}
