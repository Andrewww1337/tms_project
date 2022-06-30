import { click } from "@testing-library/user-event/dist/click";
import React, { useEffect, useRef, useState, ReactElement } from "react";
import { Button } from "../Button";

import "./Links.css";

type LinkProps = {
  text: string;
  image: ReactElement;
};

export const Link = ({ text, image }: LinkProps) => {
  return (
    <div className="linkComponent">
      {image}
      <a className="link" href="url">
        {text}
      </a>
    </div>
  );
};
