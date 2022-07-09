import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { LeftPanel } from "../LeftPanel";
import { NavBar } from "../NavBar";
import "./layout.css";
import { ThemContext } from "../../App";

export const Layout = () => {
  const { theme, setTheme } = useContext(ThemContext);

  return (
    <div className={`App ${theme}`}>
      <div className="LeftSide">
        <LeftPanel></LeftPanel>
      </div>
      <div className="RightSide">
        <NavBar></NavBar>
        <Outlet />
      </div>
    </div>
  );
};
