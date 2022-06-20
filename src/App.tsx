import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button";
import { text } from "stream/consumers";
import { ButtonsGroup } from "./components/ButtonsGroup";
import { Input } from "./components/input";
import { RegistrationForm } from "./components/RegistrationForm";
import { Tabs } from "./components/Tabs";
import { Search } from "./components/Search";
import { ToggleButton } from "./components/Switch";

function App() {
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState("");
  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    console.log(search);
  };
  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    console.log(password);
  };
  const submitForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(password);
  };
  return (
    <div className="App">
      <Button
        text="Primary"
        onClick={() => console.log("Text")}
        className="primary"
        disabled={false}
      ></Button>

      <Button
        text="Secondary"
        onClick={() => console.log("Text")}
        className="secondary"
        disabled={false}
      ></Button>
      <div>
        <ButtonsGroup
          onClickFirstButton={() => console.log("Text1")}
          onClickSecondButton={() => console.log("Text2")}
          disabled={false}
        ></ButtonsGroup>
        <form>
          <Input
            type="email"
            title="Email"
            placeholder="Email"
            error={false}
            errorMessage="Error text"
            value={password}
            onChange={onPasswordChange}
          />
          <Button
            text="Sign Up"
            className="primary"
            onClick={submitForm}
            disabled={false}
          />
        </form>
        <RegistrationForm></RegistrationForm>
        <Tabs
          onClickFirstButton={() => console.log("Text1")}
          onClickSecondButton={() => console.log("Text2")}
          disabled={false}
          textFifstButton="Text1"
          textSecondButton="Text2"
        ></Tabs>
        <Search
          onChange={onSearchChange}
          value={search}
          disabled={false}
          onClick={() => console.log("Text")}
        ></Search>
        <ToggleButton onClick={() => console.log("Text")}></ToggleButton>
      </div>
    </div>
  );
}

export default App;
