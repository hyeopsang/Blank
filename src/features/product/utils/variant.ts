import type {
  ProductColor,
  ProductFit,
  ProductSize,
  ProductVariant,
  PrintStyle,
  SelectedOptions,
} from "@/features/product/model/product.types";

export function findVariant(
  variants: ProductVariant[],
  selected: SelectedOptions,
): ProductVariant | null {
  if (
    !selected.color ||
    !selected.size ||
    !selected.fit ||
    !selected.printStyle
  ) {
    return null;
  }

  return (
    variants.find(
      (variant) =>
        variant.color === selected.color &&
        variant.size === selected.size &&
        variant.fit === selected.fit &&
        variant.printStyle === selected.printStyle,
    ) ?? null
  );
}

function filterVariantsByPartialSelection(
  variants: ProductVariant[],
  selected: Partial<SelectedOptions>,
): ProductVariant[] {
  return variants.filter((variant) => {
    if (selected.color && variant.color !== selected.color) return false;
    if (selected.size && variant.size !== selected.size) return false;
    if (selected.fit && variant.fit !== selected.fit) return false;
    if (selected.printStyle && variant.printStyle !== selected.printStyle) {
      return false;
    }

    return true;
  });
}

export function getSelectableSizes(
  variants: ProductVariant[],
  selected: SelectedOptions,
): Set<ProductSize> {
  const matched = filterVariantsByPartialSelection(variants, {
    color: selected.color,
    fit: selected.fit,
    printStyle: selected.printStyle,
  });

  return new Set(
    matched
      .filter((variant) => variant.stock > 0)
      .map((variant) => variant.size),
  );
}

export function getSelectableColors(
  variants: ProductVariant[],
  selected: SelectedOptions,
): Set<ProductColor> {
  const matched = filterVariantsByPartialSelection(variants, {
    size: selected.size,
    fit: selected.fit,
    printStyle: selected.printStyle,
  });

  return new Set(
    matched
      .filter((variant) => variant.stock > 0)
      .map((variant) => variant.color),
  );
}

export function getSelectableFits(
  variants: ProductVariant[],
  selected: SelectedOptions,
): Set<ProductFit> {
  const matched = filterVariantsByPartialSelection(variants, {
    color: selected.color,
    size: selected.size,
    printStyle: selected.printStyle,
  });

  return new Set(
    matched
      .filter((variant) => variant.stock > 0)
      .map((variant) => variant.fit),
  );
}

export function getSelectablePrintStyles(
  variants: ProductVariant[],
  selected: SelectedOptions,
): Set<PrintStyle> {
  const matched = filterVariantsByPartialSelection(variants, {
    color: selected.color,
    size: selected.size,
    fit: selected.fit,
  });

  return new Set(
    matched
      .filter((variant) => variant.stock > 0)
      .map((variant) => variant.printStyle),
  );
}

export function isPurchasable(variant: ProductVariant | null): boolean {
  return !!variant && variant.stock > 0;
}
