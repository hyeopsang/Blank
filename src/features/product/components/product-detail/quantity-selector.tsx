"use client";

interface QuantitySelectorProps {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

export function QuantitySelector({
  quantity,
  onDecrease,
  onIncrease,
}: QuantitySelectorProps) {
  return (
    <div>
      <p className="mb-2 text-sm font-medium">Quantity</p>
      <div className="flex w-fit items-center rounded-lg border border-gray-300">
        <button type="button" onClick={onDecrease} className="px-4 py-2">
          -
        </button>
        <span className="min-w-12 text-center">{quantity}</span>
        <button type="button" onClick={onIncrease} className="px-4 py-2">
          +
        </button>
      </div>
    </div>
  );
}
