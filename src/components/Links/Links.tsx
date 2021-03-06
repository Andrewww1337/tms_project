import React, { useEffect, useRef, useState, ReactElement } from "react";
import { Link } from "react-router-dom";
import "./links.css";

type LinkProps = {
  text: string;
  image: ReactElement;
  to: string;
};

export const Linking = ({ text, image, to }: LinkProps) => {
  return (
    <div className="linkComponent">
      {image}
      <Link className="link" to={to}>
        {text}
      </Link>
    </div>
  );
};
