import { useCartStore } from "@/features/cart/store/cart.store";
import { buildCartItem } from "@/features/cart/utils/build-cart-item";
import type {
  Product,
  ProductVariant,
} from "@/features/product/model/product.types";

interface UseAddToCartParams {
  product: Product;
  currentVariant: ProductVariant | null;
  quantity: number;
  canPurchase: boolean;
}

export function useAddToCart({
  product,
  currentVariant,
  quantity,
  canPurchase,
}: UseAddToCartParams) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    if (!currentVariant) return;
    if (!canPurchase) return;

    const cartItem = buildCartItem(product, currentVariant, quantity);
    addItem(cartItem);
  };

  return {
    handleAddToCart,
  };
}
