import "./resetPasswordPagee.css";
import { ReactComponent as Pixema } from "../Icon/pixema.svg";
import { Link } from "react-router-dom";
import { ResetPassword } from "../ResetPassword";

export const ResetPasswordPagee = () => {
  return (
    <div className="resetPasswordPage">
      <Link to="/">
        <div className="resetPasswordLogo">
          <Pixema />
        </div>
      </Link>
      <div className="resetPasswordPageForm">
        <ResetPassword />
      </div>
    </div>
  );
};
