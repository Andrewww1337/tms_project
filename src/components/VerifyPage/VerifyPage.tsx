import "./verifyPage.css";
import { ReactComponent as Pixema } from "../Icon/pixema.svg";
import { Link } from "react-router-dom";

import { Verify } from "../Verify/Verify";

export const VerifyPage = () => {
  return (
    <div className="verifyPage">
      <Link to="/">
        <div className="verifyLogo">
          <Pixema />
        </div>
      </Link>
      <div className="verifyPageForm">
        <Verify />
      </div>
    </div>
  );
};
