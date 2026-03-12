import { useMemo } from "react";

import type {
  Product,
  SelectedOptions,
} from "@/features/product/model/product.types";
import {
  findVariant,
  getSelectableColors,
  getSelectableFits,
  getSelectablePrintStyles,
  getSelectableSizes,
  isPurchasable,
} from "@/features/product/utils/variant";

export function useProductVariant(
  product: Product,
  selectedOptions: SelectedOptions,
) {
  const currentVariant = useMemo(() => {
    return findVariant(product.variants, selectedOptions);
  }, [product.variants, selectedOptions]);

  const selectableColors = useMemo(() => {
    return getSelectableColors(product.variants, selectedOptions);
  }, [product.variants, selectedOptions]);

  const selectableSizes = useMemo(() => {
    return getSelectableSizes(product.variants, selectedOptions);
  }, [product.variants, selectedOptions]);

  const selectableFits = useMemo(() => {
    return getSelectableFits(product.variants, selectedOptions);
  }, [product.variants, selectedOptions]);

  const selectablePrintStyles = useMemo(() => {
    return getSelectablePrintStyles(product.variants, selectedOptions);
  }, [product.variants, selectedOptions]);

  const currentPrice = currentVariant?.price ?? product.basePrice;
  const currentStock = currentVariant?.stock ?? 0;
  const mainImage = currentVariant?.image ?? product.thumbnail;
  const canPurchase = isPurchasable(currentVariant);

  return {
    currentVariant,
    selectableColors,
    selectableSizes,
    selectableFits,
    selectablePrintStyles,
    currentPrice,
    currentStock,
    mainImage,
    canPurchase,
  };
}
