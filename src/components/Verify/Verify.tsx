import { Button } from "../../components/Button";
import { Input } from "../input";
import "./verify.css";
import { Link, useNavigate } from "react-router-dom";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export const Verify = () => {
  let navigate = useNavigate();
  const [uid, setUid] = useState("");
  const [token, setToken] = useState("");

  const onUidChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUid(event.target.value);
  };

  const onTokenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToken(event.target.value);
  };
  const submitForm = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();

    const formData = {
      uid,
      token,
    };
    navigate("/");
    console.log(uid);
    console.log(token);

    fetch("https://studapi.teachmeskills.by/auth/users/activation/", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
      },
    }).then((response) => response.json());
  };
  return (
    <div className="componentSignInForm">
      <h2 className="title">Verify</h2>
      <form className="SignInForm">
        <Input
          title="uid"
          type="text"
          placeholder="uid"
          error={false}
          errorMessage="Error text"
          value={uid}
          onChange={onUidChange}
        />
        <Input
          title="token"
          type="text"
          placeholder="Token"
          error={false}
          errorMessage="Passdords does not match"
          value={token}
          onChange={onTokenChange}
        />

        <Button
          text="Verify"
          className={`primary bottonSignInForm`}
          onClick={submitForm}
          disabled={false}
        />
      </form>
    </div>
  );
};
