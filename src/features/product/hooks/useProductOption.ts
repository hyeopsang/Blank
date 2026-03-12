import { useState } from "react";

import type { SelectedOptions } from "@/features/product/model/product.types";

const INITIAL_SELECTED_OPTIONS: SelectedOptions = {
  color: null,
  size: null,
  fit: null,
  printStyle: null,
};

export function useProductOptions() {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>(
    INITIAL_SELECTED_OPTIONS,
  );
  const [quantity, setQuantity] = useState(1);

  const updateOption = <K extends keyof SelectedOptions>(
    key: K,
    value: SelectedOptions[K],
  ) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const resetOptions = () => {
    setSelectedOptions(INITIAL_SELECTED_OPTIONS);
    setQuantity(1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const setExactQuantity = (nextQuantity: number) => {
    setQuantity(Math.max(1, nextQuantity));
  };

  return {
    selectedOptions,
    quantity,
    updateOption,
    resetOptions,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    setExactQuantity,
  };
}
