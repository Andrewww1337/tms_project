import { Link, Outlet } from "react-router-dom";
import { LeftPanel } from "../LeftPanel";
import { NavBar } from "../NavBar";
import "./layout.css";
export const Layout = () => {
  return (
    <div className="App">
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
