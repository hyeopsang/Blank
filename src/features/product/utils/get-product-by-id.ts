import { products } from "@/mocks/data/products";

export function getProductById(id: string) {
  return products.find((product) => product.id === id) ?? null;
}
