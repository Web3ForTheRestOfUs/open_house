import React from 'react';

interface SelectFieldProps<T> {
  label: string;
  name: string;
  value: T;
  options: Array<T | { value: string; label: string }>;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  placeholder?: string;
}

const SelectField = <T extends string | number>({
  label,
  name,
  value,
  options,
  onChange,
  required = false,
  placeholder
}: SelectFieldProps<T>) => {
  return (
    <div className="mb-8">
      <label className="text-[#8592AD] block mb-2">
        {label}{required && '*'}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full h-16 outline-none border-2 border-[#E8F0FC] px-4 py-1 rounded-lg bg-transparent"
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option, index) => {
          if (typeof option === 'object' && option !== null) {
            return (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            );
          }
          return (
            <option key={index} value={option}>
              {typeof option === 'number' ? option : option.toString()}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectField;