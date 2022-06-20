import React from "react";

import "./Tabs.css";

type ButtonProps = {
  onClickFirstButton: () => void;
  onClickSecondButton: () => void;
  disabled: boolean;
  textFifstButton: string;
  textSecondButton: string;
};
export const Tabs = ({
  onClickFirstButton,
  onClickSecondButton,
  disabled,
  textFifstButton,
  textSecondButton,
}: ButtonProps) => {
  return (
    <div className="tabs">
      <button
        type="button"
        onClick={onClickFirstButton}
        className="tabFirst"
        disabled={disabled}
      >
        {textFifstButton}
      </button>
      <button
        type="button"
        onClick={onClickSecondButton}
        className="tabSecond"
        disabled={disabled}
      >
        {textSecondButton}
      </button>
    </div>
  );
};
