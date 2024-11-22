import React from 'react';

interface SelectFieldProps<T> {
  label: string;
  name: string;
  value: T;
  options: T[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectField = <T extends string | number>({
  label,
  name,
  value,
  options,
  onChange,
}: SelectFieldProps<T>) => {
  return (
    <div className="mb-8">
      <label className="text-[#8592AD] mb-2">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="outline-none border border-2 border-[#E8F0FC] px-2 py-1 bg-transparent w-full h-16 rounded-lg"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {typeof option === 'number' ? option : option.toString()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
