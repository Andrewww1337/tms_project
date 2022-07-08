import React, { useState } from "react";
import "./selector.css";

type SelectProps = {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  value: string;
  options: Options[];
  title?: string;
};
type Options = {
  option: string;
};

export const Selector = ({
  onChange,
  disabled,
  value,
  options,
  title,
}: SelectProps) => {
  return (
    <div>
      <label className="input__label">{title}</label>
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
    </div>
  );
};
