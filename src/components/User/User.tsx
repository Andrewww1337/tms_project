import React, { useEffect, useRef, useState } from "react";
import "./user.css";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

//const userName = "Andrew";
const userLastName = "Kiri";

export const User = () => {
  const userName = useAppSelector((state) => state.posts.name);

  const [toggle, setToggle] = useState(false);
  return (
    <div className="userCard">
      <div className="user">
        <Link to="/signIn">
          <div className="userIcon">
            {userName && (
              <p>
                {userName?.[0]}
                {userLastName[0]}
              </p>
            )}
            {!userName && (
              <p>
                {"User"[0]}
                {"Name"[0]}
              </p>
            )}
          </div>
        </Link>
        <div className="userInfo">
          {userName && <p>{userName}</p>}
          {!userName && (
            <p>
              {"User"} {"Name"}
            </p>
          )}
        </div>
        {userName == "undefined" && <button className="userButton"></button>}
        {userName !== "undefined" && (
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
