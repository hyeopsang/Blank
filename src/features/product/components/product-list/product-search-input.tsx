"use client";

interface ProductSearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function ProductSearchInput({
  value,
  onChange,
}: ProductSearchInputProps) {
  return (
    <div>
      <label htmlFor="search" className="mb-2 block text-sm font-medium">
        Search
      </label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="상품명 또는 설명 검색"
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
      />
    </div>
  );
}
