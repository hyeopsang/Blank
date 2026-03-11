import { create } from "zustand";

import type { CartItem } from "@/features/cart/model/cart.types";

interface CartState {
  items: Record<string, CartItem>;
  itemIds: string[];

  addItem: (item: CartItem) => void;
  removeItem: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: {},
  itemIds: [],

  addItem: (incomingItem) =>
    set((state) => {
      const existingId = state.itemIds.find(
        (id) => state.items[id]?.sku === incomingItem.sku,
      );

      if (existingId) {
        return {
          ...state,
          items: {
            ...state.items,
            [existingId]: {
              ...state.items[existingId],
              quantity:
                state.items[existingId].quantity + incomingItem.quantity,
            },
          },
        };
      }

      return {
        items: {
          ...state.items,
          [incomingItem.cartItemId]: incomingItem,
        },
        itemIds: [...state.itemIds, incomingItem.cartItemId],
      };
    }),

  removeItem: (cartItemId) =>
    set((state) => {
      const nextItems = { ...state.items };
      delete nextItems[cartItemId];

      return {
        items: nextItems,
        itemIds: state.itemIds.filter((id) => id !== cartItemId),
      };
    }),

  updateQuantity: (cartItemId, quantity) =>
    set((state) => {
      const targetItem = state.items[cartItemId];
      if (!targetItem) return state;

      const normalizedQuantity = Math.max(1, quantity);

      return {
        ...state,
        items: {
          ...state.items,
          [cartItemId]: {
            ...targetItem,
            quantity: normalizedQuantity,
          },
        },
      };
    }),

  clearCart: () =>
    set({
      items: {},
      itemIds: [],
    }),
}));

export const selectCartItems = (state: CartState) =>
  state.itemIds.map((id) => state.items[id]).filter(Boolean);

export const selectCartCount = (state: CartState) =>
  state.itemIds.reduce((sum, id) => sum + state.items[id].quantity, 0);

export const selectCartSubtotal = (state: CartState) =>
  state.itemIds.reduce(
    (sum, id) => sum + state.items[id].quantity * state.items[id].unitPrice,
    0,
  );
