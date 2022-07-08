import { Button } from "../../components/Button";
import "./resetPassword.css";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Input } from "../input";
import { useNavigate } from "react-router-dom";

export const ResetPassword = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const submitForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const formData = {
      email: email,
    };

    console.log(formData);

    fetch("https://studapi.teachmeskills.by/auth/users/reset_password/", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
      },
    }).then((response) => response.json());
    console.log(Response);
    navigate("/resetPasswordConfirm");
  };
  return (
    <div className="componentResetPasswordForm">
      <h2 className="title">Reset PAssword</h2>
      <form className="ResetPasswordForm">
        <Input
          title="Email"
          type="email"
          placeholder="Email"
          error={false}
          errorMessage="Error text"
          value={email}
          onChange={onEmailChange}
        />

        <Button
          text="Reset"
          className={`primary bottonResetPasswordForm`}
          onClick={submitForm}
          disabled={false}
        />
      </form>
    </div>
  );
};
