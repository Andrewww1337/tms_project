import { SignInForm } from "../SignInForm/SignInForm";
import "./signUpPage.css";
import { ReactComponent as Pixema } from "../Icon/pixema.svg";
import { Link } from "react-router-dom";
import { RegistrationForm } from "../RegistrationForm";

export const SignUpPage = () => {
  return (
    <div className="signUpPage">
      <Link to="/">
        <div className="signUpLogo">
          <Pixema />
        </div>
      </Link>
      <div className="signUpPageForm">
        <RegistrationForm></RegistrationForm>
      </div>
    </div>
  );
};
