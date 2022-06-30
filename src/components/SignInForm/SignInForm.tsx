import React, { useState } from "react";
import logo from "./logo.svg";
import "./SignInForm.css";
import { Button } from "../Button";

import { Input } from "../input";

export const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    console.log(formData); // dispatch(signUp(formData))
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

        <Button
          text="Sign In"
          className={`primary bottonSignInForm`}
          onClick={submitForm}
          disabled={false}
        />
        <p className="signatureUnderTheButton">
          Don’t have an account? Sign Up
        </p>
      </form>
    </div>
  );
};
