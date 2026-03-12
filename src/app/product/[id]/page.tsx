import { notFound } from "next/navigation";

import { ProductDetailClient } from "@/features/product/components/product-detail/product-detail-client";
import { getProductById } from "@/features/product/utils/get-product-by-id";

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
