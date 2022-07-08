import { ReactComponent as Home } from "../Icon/Home.svg";
import { ReactComponent as Fire } from "../Icon/Fire.svg";
import { ReactComponent as Bookmark } from "../Icon/Bookmark.svg";
import { ReactComponent as Gear } from "../Icon/Gear.svg";
import { ReactComponent as Logo } from "../Icon/pixema.svg";
import { Linking } from "../Links/Links";

import "./leftPanel.css";

export const LeftPanel = () => {
  return (
    <div className="leftPanel">
      <div className="logoLeftPanel">
        <Logo></Logo>
      </div>

      <div className="linksInLeftPanel">
        <Linking text="Home" to="/" image={<Home />}></Linking>
        <Linking text="Trends" to="/" image={<Fire />}></Linking>
        <Linking text="Favorites" to="/" image={<Bookmark />}></Linking>
        <Linking text="Settings" to="/" image={<Gear />}></Linking>
      </div>
    </div>
  );
};
