import React, { Dispatch, SetStateAction, useState } from "react";
import "./App.css";
import { PostList } from "./components/PostList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Post } from "./components/Post";
import { SignInPage } from "./components/SignInPage";
import { SignUpPage } from "./components/SignUpPage";
import { Layout } from "./components/Layout";
import { VerifyPage } from "./components/VerifyPage";

import { ResetPasswordConfirmPage } from "./components/ResetPasswordConfirmPage";
import { ResetPasswordPagee } from "./components/ResetPasswordPagee";
import FilterButton from "./components/Button/FilterButton";
import { SettingPage } from "./components/Setting";

interface IThemeContext {
  theme?: string;
  setTheme?: Dispatch<SetStateAction<string>>;
}

export const ThemContext = React.createContext<IThemeContext>({});

function App() {
  const [valueSelect, setValueSelect] = useState("");
  const [multiSelectResult, setMultiSelectResult] = useState<string[]>([]);
  const [theme, setTheme] = useState("dark");

  function chengeSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    setValueSelect(event.target.value);
  }

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
    <ThemContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="post/:id" element={<Post />} />
            <Route path="settings" element={<SettingPage />} />
            <Route index element={<PostList />} />
          </Route>
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/verify" element={<VerifyPage />} />
          <Route path="/resetPassword" element={<ResetPasswordPagee />} />

          <Route
            path="/resetPasswordConfirm"
            element={<ResetPasswordConfirmPage />}
          />
        </Routes>
      </div>
    </ThemContext.Provider>
  );
}

export default App;
