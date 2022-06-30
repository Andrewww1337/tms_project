import { click } from "@testing-library/user-event/dist/click";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../Button";

import "./MultiSelect.css";
type SelectProps = {
  options: Options[];
  placeholder?: string;
  title?: string;
  onClick: (a: React.MouseEvent<HTMLElement>, b: { option: string }) => void;
};
type Options = {
  option: string;
};

export const MultiSelect = ({
  options,
  placeholder,
  title,
  onClick,
}: SelectProps) => {
  const [value, setValue] = useState("");
  const [param, setParam] = useState<Options[]>([]);
  const [visibleElement, setVisibleElement] = useState(false);

  const MultiSelectEl = useRef(null);

  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const createChecrBox = (event: React.MouseEvent<HTMLElement>) => {
    setVisibleElement(true);
  };

  const handleChoose = (
    event: React.MouseEvent<HTMLElement>,
    option: { option: string }
  ) => {
    const index = param.findIndex((item) => item.option === option.option);

    if (index === -1) {
      setParam((state) => [...state, option]);
    } else {
      setParam((state) => state.filter((el, i) => i !== index));
    }
  };

  const stopPropagation = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };
  document.onclick = function (e: MouseEvent) {
    if (e.target !== MultiSelectEl.current) {
      setVisibleElement(false);
    }
  };

  return (
    <div className="multiSelector">
      <p>{title}</p>
      <div onClick={stopPropagation}>
        <div
          onClick={createChecrBox}
          className={visibleElement ? "selectOnVisible" : "fakeInputCheckBox"}
        >
          <div className={param.length > 0 ? "selectOnVisible" : ""}>
            {placeholder}
          </div>
          <div className="optionsChecker">
            {param.map(({ option }) => (
              <span className="option">
                {option}
                <button
                  className="optionsClother"
                  onClick={(e) => {
                    handleChoose(e, { option });
                    onClick(e, { option });
                    stopPropagation(e);
                  }}
                ></button>
              </span>
            ))}
          </div>
        </div>
        <input
          className={visibleElement ? "inputCheckBox" : "selectOnVisible"}
          onChange={onValueChange}
          ref={MultiSelectEl}
          value={value}
        ></input>
      </div>

      <div className={visibleElement ? "selectVisible" : "selectOnVisible"}>
        {options
          .filter((el) => el.option.slice(0, value.length) == value)
          .map(({ option }: Options) => (
            <div className="checkBoxBar">
              <label onClick={(e) => e.stopPropagation()} className="checkBox">
                <input
                  onClick={(e) => {
                    stopPropagation(e);
                    onClick(e, { option });
                    handleChoose(e, { option });
                  }}
                  type="checkbox"
                  className="checkBox"
                  id={option}
                  name=""
                  value=""
                  checked={
                    param.find((item) => item.option === option) ? true : false
                  }
                />
                <span className="checkBox">{option}</span>
              </label>
            </div>
          ))}

        <div className="checkBoxBar"></div>
      </div>
    </div>
  );
};
