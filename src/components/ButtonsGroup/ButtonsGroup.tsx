import React from "react";
import { ReactComponent as IconBookmark } from "../Icon/Bookmark.svg";
import { ReactComponent as IconSettings } from "../Icon/Settings.svg";
import "./buttonsGroup.css";

type ButtonProps = {
  onClickFirstButton: () => void;
  onClickSecondButton: () => void;
  disabled: boolean;
};

export const ButtonsGroup = ({
  onClickFirstButton,
  onClickSecondButton,
  disabled,
}: ButtonProps) => {
  return (
    <div className="bottonsGroup">
      <button
        type="button"
        onClick={onClickFirstButton}
        className="bottonsGroupFirstButton"
        disabled={disabled}
      >
        {<IconBookmark className="icon" />}
      </button>
      <button
        type="button"
        onClick={onClickSecondButton}
        className="bottonsGroupSecondButton"
        disabled={disabled}
      >
        {<IconSettings className="icon" />}
      </button>
    </div>
  );
};
