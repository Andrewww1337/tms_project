import React, { useEffect, useRef, useState } from "react";
import { text } from "stream/consumers";
import "./Search.css";
import { ReactComponent as IconParamsSearch } from "../Icon/SearchParamsIcon.svg";
type InputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  value: string;
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
};

export const Search = ({ disabled, onChange, value, onClick }: InputProps) => {
  return (
    <div className="search">
      <input
        type={"text"}
        placeholder={"Search"}
        className={"searchInput"}
        disabled={disabled}
        value={value}
        onChange={onChange}
        onClick={onClick}
      ></input>
    </div>
  );
};
