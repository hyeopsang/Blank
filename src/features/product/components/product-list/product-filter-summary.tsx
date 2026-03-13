"use client";

interface ProductFilterSummaryProps {
  totalCount: number;
  onReset: () => void;
}

export function ProductFilterSummary({
  totalCount,
  onReset,
}: ProductFilterSummaryProps) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-sm text-gray-500">
        총 <span className="font-medium text-black">{totalCount}</span>개 상품
      </p>

      <button
        type="button"
        onClick={onReset}
        className="rounded-lg border border-gray-300 px-4 py-2 text-sm"
      >
        필터 초기화
      </button>
    </div>
  );
}
