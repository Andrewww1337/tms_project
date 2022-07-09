import "./search.css";
import FilterButton from "../Button/FilterButton";
import { useContext } from "react";
import { ThemContext } from "../../App";

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
  const { theme, setTheme } = useContext(ThemContext);
  return (
    <div className="search">
      <input
        ref={inputRef}
        type={"text"}
        placeholder={"Search"}
        className={`searchInput searchInput--${theme}`}
        disabled={disabled}
        onChange={onChange}
        onClick={onClick}
      ></input>
      <FilterButton></FilterButton>
    </div>
  );
};
