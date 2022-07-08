import { Button } from "../../components/Button";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Input } from "../input";
import "./resetPasswordConfirm.css";
import { useNavigate } from "react-router-dom";
export const ResetPasswordConfirm = () => {
  let navigate = useNavigate();

  const [uid, setUid] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");

  const onUidChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUid(event.target.value);
  };

  const onTokenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToken(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const submitForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const formData = {
      uid: uid,
      token: token,
      new_password: password,
    };
    console.log(formData);
    fetch(
      "https://studapi.teachmeskills.by/auth/users/reset_password_confirm/",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=utf-8",
        },
      }
    ).then((response) => response.json());
    console.log(Response);
    navigate("/");
  };
  return (
    <div className="componentResetPasswordConfirmForm">
      <h2 className="title">Reset PAssword</h2>
      <form className="ResetPasswordConfirmForm">
        <Input
          title="Uid"
          type="text"
          placeholder="Your Uid"
          error={false}
          errorMessage="Error text"
          value={uid}
          onChange={onUidChange}
        />
        <Input
          title="Token"
          type="text"
          placeholder="Your token"
          error={false}
          errorMessage="Error text"
          value={token}
          onChange={onTokenChange}
        />

        <Input
          title="Password"
          type="text"
          placeholder="New Password"
          error={false}
          errorMessage="Error text"
          value={password}
          onChange={onPasswordChange}
        />

        <Button
          text="Reset"
          className={`primary bottonResetPasswordConfirmForm`}
          onClick={submitForm}
          disabled={false}
        />
      </form>
    </div>
  );
};
