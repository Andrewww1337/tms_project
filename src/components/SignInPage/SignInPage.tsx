import { SignInForm } from "../SignInForm/SignInForm";
import "./signInPage.css";
import { ReactComponent as Pixema } from "../Icon/pixema.svg";
import { Link } from "react-router-dom";

export const SignInPage = () => {
  return (
    <div className="signInPage">
      <Link to="/">
        <div className="signInLogo">
          <Pixema />
        </div>
      </Link>
      <div className="signInPageForm">
        <SignInForm></SignInForm>
      </div>
    </div>
  );
};
