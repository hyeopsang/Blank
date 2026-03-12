"use client";

interface OptionSelectorProps<T extends string> {
  title: string;
  options: readonly T[];
  selectedValue: T | null;
  selectableValues: Set<T>;
  onSelect: (value: T) => void;
}

export function OptionSelector<T extends string>({
  title,
  options,
  selectedValue,
  selectableValues,
  onSelect,
}: OptionSelectorProps<T>) {
  return (
    <div>
      <p className="mb-2 text-sm font-medium">{title}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const selectable = selectableValues.has(option);
          const isSelected = selectedValue === option;

          return (
            <button
              key={option}
              type="button"
              onClick={() => onSelect(option)}
              disabled={!selectable}
              className={`rounded-lg border px-4 py-2 text-sm ${
                isSelected
                  ? "border-black bg-black text-white"
                  : "border-gray-300 bg-white text-black"
              } disabled:cursor-not-allowed disabled:opacity-40`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
