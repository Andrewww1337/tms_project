import "./settingPage.css";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { ToggleButton } from "../Switch";
import { ThemContext } from "../../App";
import { useAppSelector } from "../../redux/hooks";

export const SettingPage = () => {
  const userName = useAppSelector((state) => state.posts.name);
  const { theme, setTheme } = useContext(ThemContext);
  const email = localStorage.getItem("userEmail");
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
    <div className={`settings settings--${theme}`}>
      <div className="profil">
        <h2>Profile</h2>
        <div className={`aboutUser aboutUser--${theme}`}>
          <div className="userPoint">
            <span>Name</span>
            <span className={`userInformation userInformation--${theme}`}>
              {userName && <>{userName}</>}
              {!userName && <>Name</>}
            </span>
          </div>
          <div className="userPoint">
            <span>Email</span>
            <span className={`userInformation userInformation--${theme}`}>
              {userName && <>{email}</>}
              {!userName && <>Email</>}
            </span>
          </div>
        </div>
      </div>
      <div>
        <h2>Color mode</h2>
        <div className={`colorMode colorMode--${theme}`}>
          <div className="interfaceSettings">
            {theme == "dark" ? (
              <>
                <h3>Dark</h3>
                <h4>Use light thema</h4>
              </>
            ) : (
              <>
                <h3>Light</h3>
                <h4>Use dark thema</h4>
              </>
            )}
          </div>
          <div className="interfaceSettings">
            <ToggleButton onClick={changeTheme}></ToggleButton>
          </div>
        </div>
      </div>
    </div>
  );
};
