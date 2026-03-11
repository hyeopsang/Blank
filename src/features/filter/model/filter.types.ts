import type {
  ProductColor,
  ProductFit,
  ProductSize,
} from "@/features/product/model/product.types";

export type ProductSort = "latest" | "price_asc" | "price_desc";

export interface ProductListFilter {
  q?: string;
  color?: ProductColor;
  size?: ProductSize;
  fit?: ProductFit;
  sort?: ProductSort;
}
