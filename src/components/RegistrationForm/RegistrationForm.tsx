import React, { useState } from "react";
import logo from "./logo.svg";
import "./RegistrationForm.css";
import { Button } from "../Button";

import { Input } from "../input";

export const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  let [errorPassword, setErrorPassword] = useState(false);
  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onConfirmedPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmedPassword(event.target.value);
  };

  const submitForm = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();

    if (password == confirmedPassword) {
      const formData = {
        username,
        email,
        password,
      };
      console.log(formData); // dispatch(signUp(formData))
    } else {
      setErrorPassword((current) => !current);
    }
  };
  return (
    <div className="componentRegistrationForm">
      <h2 className="title">Sign Up</h2>
      <form className="RegistrationForm">
        <Input
          title="Name"
          type="text"
          placeholder="Name"
          error={false}
          errorMessage="Error text"
          value={username}
          onChange={onNameChange}
        />
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
          error={errorPassword}
          errorMessage="Passdords does not match"
          value={password}
          onChange={onPasswordChange}
        />
        <Input
          title="Confirm password"
          type="password"
          placeholder="Confirm Password"
          error={errorPassword}
          errorMessage="Passdords does not match"
          value={confirmedPassword}
          onChange={onConfirmedPasswordChange}
        />

        <Button
          text="Sign Up"
          className={`primary bottonRegistrationForm`}
          onClick={submitForm}
          disabled={false}
        />
        <p className="signatureUnderTheButton">
          Already have an account? Sign In
        </p>
      </form>
    </div>
  );
};
