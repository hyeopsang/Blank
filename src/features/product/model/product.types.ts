export type ProductColor = "black" | "white" | "gray" | "navy";
export type ProductSize = "S" | "M" | "L" | "XL";
export type ProductFit = "regular" | "oversized";
export type PrintStyle = "none" | "front-logo" | "back-graphic";

export interface ProductImage {
  id: string;
  src: string;
  alt: string;
  color?: ProductColor;
  isPrimary?: boolean;
}

export interface ProductVariant {
  sku: string;
  color: ProductColor;
  size: ProductSize;
  fit: ProductFit;
  printStyle: PrintStyle;
  price: number;
  stock: number;
  image: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  basePrice: number;
  thumbnail: string;
  tags: string[];
  images: ProductImage[];
  variants: ProductVariant[];
}

export interface SelectedOptions {
  color: ProductColor | null;
  size: ProductSize | null;
  fit: ProductFit | null;
  printStyle: PrintStyle | null;
}
