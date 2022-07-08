import "./settingPage.css";

import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ToggleButton } from "../Switch";
import { ThemContext } from "../../App";

export const SettingPage = () => {
  const { theme, setTheme } = useContext(ThemContext);

  const changeTheme = () => {
    if (setTheme) {
      setTheme((state) => {
        if (state === "light") {
          return "dark";
        } else {
          return "light";
        }
      });
    }
  };

  return (
    <div className="settings">
      <div className="profil">
        <h2>Profile</h2>
        <div className="aboutUser">
          <div className="userPoint">
            <span>Name</span>
            <span className="userInformation">Name</span>
          </div>
          <div className="userPoint">
            <span>Email</span>
            <span className="userInformation">Email</span>
          </div>
        </div>
      </div>
      <div>
        <h2>Color mode</h2>
        <div className="colorMode">
          <div className="interfaceSettings">
            <h3>Darc</h3>
            <h4>Use dark thema</h4>
          </div>
          <div className="interfaceSettings">
            <ToggleButton onClick={changeTheme}></ToggleButton>
          </div>
        </div>
      </div>
    </div>
  );
};
