import React, { useEffect, useRef, useState } from "react";
import "./input.css";

type InputProps = {
  type?: React.HTMLInputTypeAttribute;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  title?: string;
  error?: boolean;
  errorMessage?: string;
  value: string;
};

export const Input = ({
  type,
  title,
  error,
  errorMessage,
  disabled,
  onChange,
  placeholder,
  value,
}: InputProps) => {
  return (
    <div className="input">
      <label className="input__label" htmlFor={type}>
        {title}
      </label>
      <input
        type={type ?? "text"}
        placeholder={placeholder}
        className={`${type} ${error}`}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
      <span className={`${error}`}>{error && errorMessage}</span>
    </div>
  );
};
