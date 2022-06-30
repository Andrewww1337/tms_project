import { click } from "@testing-library/user-event/dist/click";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../Button";

import "./User.css";

const userName = "Andrew";
const userLastName = "Kiri";

export const User = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="userCard">
      <div className="user">
        <div className="userIcon">
          {userName.length > 0 && (
            <p>
              {userName[0]}
              {userLastName[0]}
            </p>
          )}
          {userName.length < 1 && (
            <p>
              {"User"[0]}
              {"Name"[0]}
            </p>
          )}
        </div>
        <div className="userInfo">
          {userName.length > 0 && (
            <p>
              {userName} {userLastName}
            </p>
          )}
          {userName.length < 1 && (
            <p>
              {"User"} {"Name"}
            </p>
          )}
        </div>
        {userName.length < 0 && <button className="userButton"></button>}
        {userName.length > 1 && (
          <button
            onClick={() => setToggle(!toggle)}
            className="noUserButton"
          ></button>
        )}
      </div>
      {toggle && (
        <div className="userSettings">
          <button className="buttonProfil">Edit profil</button>
          <button className="buttonProfil">Log Out</button>
        </div>
      )}
    </div>
  );
};
