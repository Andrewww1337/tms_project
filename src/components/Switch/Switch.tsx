import React, { useState } from "react";

import "./Switch.css";
type SwitchProps = {
  onClick: () => void;
  disabled?: boolean;
};

export const ToggleButton = ({ onClick, disabled }: SwitchProps) => {
  return (
    <label className="switch">
      <input onClick={onClick} type="checkbox" />
      <span className="slider" />
    </label>
  );
};
