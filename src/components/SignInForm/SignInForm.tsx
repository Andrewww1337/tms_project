import React, { useState } from "react";
import logo from "./logo.svg";
import "./signInForm.css";
import { Button } from "../Button";
import { loadToken } from "../../features/auth/tokenSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { Input } from "../input";
import { Link, useNavigate } from "react-router-dom";

export const SignInForm = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const submitForm = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();

    const formData = {
      email,
      password,
    };
    dispatch(loadToken(formData));
    navigate("/");
  };

  return (
    <div className="componentSignInForm">
      <h2 className="title">Sign In</h2>
      <form className="SignInForm">
        <Input
          title="Email"
          type="email"
          placeholder="Email"
          error={false}
          errorMessage="Error text"
          value={email}
          onChange={onEmailChange}
        />
        <Input
          title="Password"
          type="password"
          placeholder="Password"
          error={false}
          errorMessage="Passdords does not match"
          value={password}
          onChange={onPasswordChange}
        />
        <p className="signatureUnderTheButton">
          <Link to="/resetPassword">Forgot assword? </Link>
        </p>

        <Button
          text="Sign In"
          className={`primary bottonSignInForm`}
          onClick={submitForm}
          disabled={false}
        />

        <p className="signatureUnderTheButton">
          Don’t have an account? <Link to="/signUp">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};
