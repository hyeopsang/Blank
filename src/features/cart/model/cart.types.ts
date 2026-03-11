import type {
  PrintStyle,
  ProductColor,
  ProductFit,
  ProductSize,
} from "@/features/product/model/product.types";

export interface CartItem {
  cartItemId: string;
  productId: string;
  sku: string;
  slug: string;
  name: string;
  thumbnail: string;
  color: ProductColor;
  size: ProductSize;
  fit: ProductFit;
  printStyle: PrintStyle;
  quantity: number;
  unitPrice: number;
}

export interface CartSummary {
  totalItems: number;
  subtotal: number;
}
