import React, { useState } from "react";
import "./Selector.css";
type SelectProps = {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  value: string;
  options: Options[];
};
type Options = {
  option: string;
};

export const Selector = ({
  onChange,
  disabled,
  value,
  options,
}: SelectProps) => {
  return (
    <div>
      <select
        className="select"
        value={value}
        disabled={disabled}
        onChange={onChange}
      >
        {options.map(({ option }) => (
          <option>{option}</option>
        ))}
      </select>
      <p>Выбрана опция: {value}</p>
    </div>
  );
};
