"use client";

import type {
  PrintStyle,
  Product,
  ProductColor,
  ProductFit,
  ProductSize,
  SelectedOptions,
} from "@/features/product/model/product.types";

import { OptionSelector } from "./option-selector";
import { QuantitySelector } from "./quantity-selector";

const COLORS: ProductColor[] = ["black", "white", "gray", "navy"];
const SIZES: ProductSize[] = ["S", "M", "L", "XL"];
const FITS: ProductFit[] = ["regular", "oversized"];
const PRINT_STYLES: PrintStyle[] = ["none", "front-logo", "back-graphic"];

interface ProductInfoProps {
  product: Product;
  selectedOptions: SelectedOptions;
  quantity: number;
  currentPrice: number;
  currentStock: number;
  canPurchase: boolean;
  selectableColors: Set<ProductColor>;
  selectableSizes: Set<ProductSize>;
  selectableFits: Set<ProductFit>;
  selectablePrintStyles: Set<PrintStyle>;
  updateOption: <K extends keyof SelectedOptions>(
    key: K,
    value: SelectedOptions[K],
  ) => void;
  handleDecreaseQuantity: () => void;
  handleIncreaseQuantity: () => void;
  handleAddToCart: () => void;
}

export function ProductInfo({
  product,
  selectedOptions,
  quantity,
  currentPrice,
  currentStock,
  canPurchase,
  selectableColors,
  selectableSizes,
  selectableFits,
  selectablePrintStyles,
  updateOption,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
  handleAddToCart,
}: ProductInfoProps) {
  const isOptionFullySelected =
    !!selectedOptions.color &&
    !!selectedOptions.size &&
    !!selectedOptions.fit &&
    !!selectedOptions.printStyle;

  return (
    <section>
      <p className="mb-2 text-sm text-gray-500">{product.tags.join(" · ")}</p>
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="mt-3 text-gray-600">{product.shortDescription}</p>

      <p className="mt-6 text-2xl font-semibold">
        ₩{currentPrice.toLocaleString()}
      </p>

      <div className="mt-3">
        {isOptionFullySelected ? (
          <p
            className={
              currentStock > 0
                ? "text-sm text-green-600"
                : "text-sm text-red-600"
            }
          >
            {currentStock > 0 ? `재고 ${currentStock}개` : "품절된 옵션입니다"}
          </p>
        ) : (
          <p className="text-sm text-gray-500">옵션을 모두 선택해주세요</p>
        )}
      </div>

      <div className="mt-8 space-y-6">
        <OptionSelector
          title="Color"
          options={COLORS}
          selectedValue={selectedOptions.color}
          selectableValues={selectableColors}
          onSelect={(value) => updateOption("color", value)}
        />

        <OptionSelector
          title="Size"
          options={SIZES}
          selectedValue={selectedOptions.size}
          selectableValues={selectableSizes}
          onSelect={(value) => updateOption("size", value)}
        />

        <OptionSelector
          title="Fit"
          options={FITS}
          selectedValue={selectedOptions.fit}
          selectableValues={selectableFits}
          onSelect={(value) => updateOption("fit", value)}
        />

        <OptionSelector
          title="Print Style"
          options={PRINT_STYLES}
          selectedValue={selectedOptions.printStyle}
          selectableValues={selectablePrintStyles}
          onSelect={(value) => updateOption("printStyle", value)}
        />

        <QuantitySelector
          quantity={quantity}
          onDecrease={handleDecreaseQuantity}
          onIncrease={handleIncreaseQuantity}
        />
      </div>

      <button
        type="button"
        onClick={handleAddToCart}
        disabled={!canPurchase}
        className="mt-8 w-full rounded-xl bg-black px-6 py-4 text-white disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        {canPurchase
          ? "장바구니 담기"
          : "옵션을 선택하거나 재고를 확인해주세요"}
      </button>

      <section className="mt-10">
        <h2 className="text-lg font-semibold">상품 설명</h2>
        <p className="mt-3 text-sm leading-6 text-gray-600">
          {product.description}
        </p>
      </section>
    </section>
  );
}
