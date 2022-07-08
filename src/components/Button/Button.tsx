import React from "react";

import "./button.css";

type ButtonProps = {
  text?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className: string;
  disabled: boolean;
  image?: string;
};

export const Button = ({
  onClick,
  text,
  className,
  disabled,
  image,
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {image && <img className="icon" src={image} alt="no" />}
      {text}
    </button>
  );
};
