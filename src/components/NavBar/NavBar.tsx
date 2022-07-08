import React, { useEffect, useRef, useState } from "react";
import { Search } from "../Search";
import { User } from "../User";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "./navBar.css";
import { delPost } from "../../features/posts";
import { getPost, getProps, delProps } from "../../features/posts";

export const NavBar = () => {
  const dispatch = useAppDispatch();
  const searchRef = useRef<HTMLInputElement | null>(null);
  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (String(searchRef.current?.value).length > 0) {
      dispatch(delPost(null));
      dispatch(delProps("2"));
      dispatch(getPost(`&s=${String(searchRef.current?.value)}&page=1`));
      dispatch(getProps(`&s=${String(searchRef.current?.value)}&page=1`));
    } else {
      dispatch(delPost(null));
      dispatch(getProps("y2022&s=all&page=1"));
      dispatch(getPost("y2022&s=all&page=1"));
      dispatch(delProps("2"));
    }
  };
  return (
    <div className="navBar">
      <div className="searhCompanentInNavBar">
        <Search
          inputRef={searchRef}
          onChange={onSearchChange}
          disabled={false}
          onClick={() => console.log("Text")}
        ></Search>
      </div>
      <div className="userComponentInNavBar">
        <User></User>
      </div>
    </div>
  );
};
