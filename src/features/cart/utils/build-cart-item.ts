import type { CartItem } from "@/features/cart/model/cart.types";
import type {
  Product,
  ProductVariant,
} from "@/features/product/model/product.types";

export function buildCartItem(
  product: Product,
  variant: ProductVariant,
  quantity: number,
): CartItem {
  return {
    cartItemId: `${product.id}-${variant.sku}`,
    productId: product.id,
    sku: variant.sku,
    slug: product.slug,
    name: product.name,
    thumbnail: variant.image || product.thumbnail,
    color: variant.color,
    size: variant.size,
    fit: variant.fit,
    printStyle: variant.printStyle,
    quantity,
    unitPrice: variant.price,
  };
}
