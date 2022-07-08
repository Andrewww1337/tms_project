import React, { useEffect, useRef, useState } from "react";
import { text } from "stream/consumers";
import "./search.css";
import { ReactComponent as IconParamsSearch } from "../Icon/SearchParamsIcon.svg";
import FilterButton from "../Button/FilterButton";
type InputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  value?: string;
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
  inputRef?: any;
};

export const Search = ({
  disabled,
  onChange,
  value,
  onClick,
  inputRef,
}: InputProps) => {
  return (
    <div className="search">
      <input
        ref={inputRef}
        type={"text"}
        placeholder={"Search"}
        className={"searchInput"}
        disabled={disabled}
        onChange={onChange}
        onClick={onClick}
      ></input>
      <FilterButton></FilterButton>
    </div>
  );
};
