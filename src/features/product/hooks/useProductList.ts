"use client";

import { useMemo, useState } from "react";

import type { Product } from "@/features/product/model/product.types";
import type {
  ProductListFilter,
  ProductSort,
} from "@/features/filter/model/filter.types";
import { filterProducts } from "@/features/product/utils/filter-products";
import { sortProducts } from "@/features/product/utils/sort-products";

const INITIAL_FILTERS: ProductListFilter = {
  q: "",
  color: undefined,
  size: undefined,
  fit: undefined,
  sort: "latest",
};

export function useProductList(products: Product[]) {
  const [filters, setFilters] = useState<ProductListFilter>(INITIAL_FILTERS);

  const updateFilter = <K extends keyof ProductListFilter>(
    key: K,
    value: ProductListFilter[K],
  ) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const updateSort = (sort: ProductSort) => {
    setFilters((prev) => ({
      ...prev,
      sort,
    }));
  };

  const resetFilters = () => {
    setFilters(INITIAL_FILTERS);
  };

  const filteredProducts = useMemo(() => {
    return filterProducts(products, filters);
  }, [products, filters]);

  const sortedProducts = useMemo(() => {
    return sortProducts(filteredProducts, filters.sort);
  }, [filteredProducts, filters.sort]);

  return {
    filters,
    products: sortedProducts,
    updateFilter,
    updateSort,
    resetFilters,
  };
}
