import "./resetPasswordConfirmPage.css";
import { ReactComponent as Pixema } from "../Icon/pixema.svg";
import { Link } from "react-router-dom";
import { ResetPasswordConfirm } from "../ResetPasswordConfirm";

export const ResetPasswordConfirmPage = () => {
  return (
    <div className="resetPasswordConfirmPage">
      <Link to="/">
        <div className="resetPasswordConfirmLogo">
          <Pixema />
        </div>
      </Link>
      <div className="resetPasswordConfirmPageForm">
        <ResetPasswordConfirm />
      </div>
    </div>
  );
};
