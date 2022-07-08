import React, { useEffect, useRef, useState, ReactElement } from "react";
import { ReactComponent as Vector } from "../Icon/Arrow.svg";
import "./arrow.css";

type ArrowProps = {
  vector: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

export const Arrow = ({ vector, onClick }: ArrowProps) => {
  return (
    <div onClick={onClick} className="ArrowComponent">
      {<Vector className={vector == "left" ? "vector" : ""} />}
    </div>
  );
};
