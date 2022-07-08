import React from "react";
import "./tabs.css";

type ButtonProps = {
  onClickFirstButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClickSecondButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
  textFifstButton: string;
  textSecondButton: string;
  extraClassFirstButton?: string;
  extraClassSecondButton?: string;
};

export const Tabs = ({
  onClickFirstButton,
  onClickSecondButton,
  disabled,
  textFifstButton,
  textSecondButton,
  extraClassFirstButton,
  extraClassSecondButton,
}: ButtonProps) => {
  return (
    <div className="tabs">
      <button
        type="button"
        onClick={onClickFirstButton}
        className={`tabFirst ${extraClassFirstButton}`}
        disabled={disabled}
      >
        {textFifstButton}
      </button>
      <button
        type="button"
        onClick={onClickSecondButton}
        className={`tabSecond ${extraClassSecondButton}`}
        disabled={disabled}
      >
        {textSecondButton}
      </button>
    </div>
  );
};
