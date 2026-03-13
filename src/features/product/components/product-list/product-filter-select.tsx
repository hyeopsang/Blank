"use client";

interface ProductFilterSelectProps<T extends string> {
  id: string;
  label: string;
  value: T | "";
  options: readonly T[];
  onChange: (value: T | undefined) => void;
}

export function ProductFilterSelect<T extends string>({
  id,
  label,
  value,
  options,
  onChange,
}: ProductFilterSelectProps<T>) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) =>
          onChange((e.target.value || undefined) as T | undefined)
        }
        className="w-full rounded-lg border border-gray-300 px-3 py-3 outline-none focus:border-black"
      >
        <option value="">전체</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
