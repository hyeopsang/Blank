"use client";

import type { Product } from "@/features/product/model/product.types";
import { useAddToCart } from "../../hooks/useAddToCart";
import { useProductOptions } from "../../hooks/useProductOption";
import { useProductVariant } from "../../hooks/useProductVariant";

import { ProductInfo } from "./product-info";

interface ProductDetailClientProps {
  product: Product;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const {
    selectedOptions,
    quantity,
    updateOption,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
  } = useProductOptions();

  const {
    currentVariant,
    selectableColors,
    selectableSizes,
    selectableFits,
    selectablePrintStyles,
    currentPrice,
    currentStock,
    mainImage,
    canPurchase,
  } = useProductVariant(product, selectedOptions);

  const { handleAddToCart } = useAddToCart({
    product,
    currentVariant,
    quantity,
    canPurchase,
  });

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="grid gap-10 md:grid-cols-2">
        <section>
          <div className="aspect-4/5 rounded-2xl bg-gray-100" />
          <p className="mt-4 text-sm text-gray-500">대표 이미지: {mainImage}</p>
        </section>

        <ProductInfo
          product={product}
          selectedOptions={selectedOptions}
          quantity={quantity}
          currentPrice={currentPrice}
          currentStock={currentStock}
          canPurchase={canPurchase}
          selectableColors={selectableColors}
          selectableSizes={selectableSizes}
          selectableFits={selectableFits}
          selectablePrintStyles={selectablePrintStyles}
          updateOption={updateOption}
          handleDecreaseQuantity={handleDecreaseQuantity}
          handleIncreaseQuantity={handleIncreaseQuantity}
          handleAddToCart={handleAddToCart}
        />
      </div>
    </main>
  );
}
