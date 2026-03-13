"use client";

import type {
  ProductColor,
  ProductFit,
  ProductSize,
} from "@/features/product/model/product.types";
import type {
  ProductListFilter,
  ProductSort,
} from "@/features/filter/model/filter.types";

import { ProductFilterSelect } from "./product-filter-select";
import { ProductFilterSummary } from "./product-filter-summary";
import { ProductSearchInput } from "./product-search-input";

const COLORS: ProductColor[] = ["black", "white", "gray", "navy"];
const SIZES: ProductSize[] = ["S", "M", "L", "XL"];
const FITS: ProductFit[] = ["regular", "oversized"];
const SORT_OPTIONS: ProductSort[] = ["latest", "price_asc", "price_desc"];

interface ProductListFiltersProps {
  filters: ProductListFilter;
  totalCount: number;
  updateFilter: <K extends keyof ProductListFilter>(
    key: K,
    value: ProductListFilter[K],
  ) => void;
  updateSort: (sort: ProductSort) => void;
  resetFilters: () => void;
}

export function ProductListFilters({
  filters,
  totalCount,
  updateFilter,
  updateSort,
  resetFilters,
}: ProductListFiltersProps) {
  return (
    <section className="mb-8 space-y-4 rounded-2xl border border-gray-200 p-5">
      <ProductSearchInput
        value={filters.q ?? ""}
        onChange={(value) => updateFilter("q", value)}
      />

      <div className="grid gap-4 md:grid-cols-4">
        <ProductFilterSelect
          id="color"
          label="Color"
          value={filters.color ?? ""}
          options={COLORS}
          onChange={(value) => updateFilter("color", value)}
        />

        <ProductFilterSelect
          id="size"
          label="Size"
          value={filters.size ?? ""}
          options={SIZES}
          onChange={(value) => updateFilter("size", value)}
        />

        <ProductFilterSelect
          id="fit"
          label="Fit"
          value={filters.fit ?? ""}
          options={FITS}
          onChange={(value) => updateFilter("fit", value)}
        />

        <ProductFilterSelect
          id="sort"
          label="Sort"
          value={filters.sort ?? "latest"}
          options={SORT_OPTIONS}
          onChange={(value) => updateSort((value ?? "latest") as ProductSort)}
        />
      </div>

      <ProductFilterSummary totalCount={totalCount} onReset={resetFilters} />
    </section>
  );
}
