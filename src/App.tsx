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
import { SignInForm } from "./components/SignInForm/SignInForm";
import { Selector } from "./components/Selector";
import { MultiSelect } from "./components/MultiSelect";
import { User } from "./components/User";
import { Link } from "./components/Links/Links";
import { ReactComponent as Home } from "./components/Icon/Home.svg";
import { Arrow } from "./components/Arrow";
import { PostCard } from "./components/PostCard";

function App() {
  const PostSerw = {
    Search: [
      {
        Title: "The Kids Are All Right",
        Year: "2010",
        imdbID: "tt0842926",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjE4NTMwNDg5MF5BMl5BanBnXkFtZTcwNDY2ODE0Mw@@._V1_SX300.jpg",
      },
      {
        Title: "All About Eve",
        Year: "1950",
        imdbID: "tt0042192",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTY2MTAzODI5NV5BMl5BanBnXkFtZTgwMjM4NzQ0MjE@._V1_SX300.jpg",
      },
      {
        Title: "The Devil All the Time",
        Year: "2020",
        imdbID: "tt7395114",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZmE1NmVmN2EtMjZmZC00YzAyLWE4MWEtYjY5YmExMjUxODU1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
      },
      {
        Title: "The Sum of All Fears",
        Year: "2002",
        imdbID: "tt0164184",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZmFiZDkyYWQtMGNkZi00YmZkLThjNzAtY2U1YTVmYmNlNThmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      },
      {
        Title: "All the President's Men",
        Year: "1976",
        imdbID: "tt0074119",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BOWI2YWQxM2MtY2U4Yi00YjgzLTgwNzktN2ExNTgzNTIzMmUzXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_SX300.jpg",
      },
      {
        Title: "Everything Everywhere All at Once",
        Year: "2022",
        imdbID: "tt6710474",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_SX300.jpg",
      },
      {
        Title: "Run All Night",
        Year: "2015",
        imdbID: "tt2199571",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTU2ODI3ODEyOV5BMl5BanBnXkFtZTgwMTM3NTQzNDE@._V1_SX300.jpg",
      },
      {
        Title: "To All the Boys I've Loved Before",
        Year: "2018",
        imdbID: "tt3846674",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjQ3NjM5MTAzN15BMl5BanBnXkFtZTgwODQzMDAwNjM@._V1_SX300.jpg",
      },
      {
        Title: "Jingle All the Way",
        Year: "1996",
        imdbID: "tt0116705",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMmJlYzViNzctMjQ1Ni00ZWQ4LThkN2YtMzI2ZGU5Nzk0NTAyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      },
      {
        Title: "All About My Mother",
        Year: "1999",
        imdbID: "tt0185125",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BODMyYTc3YmItZDYwZC00ZmU1LTgyNGUtMDU4NDhiOWExNmU3XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_SX300.jpg",
      },
    ],
    totalResults: "6874",
    Response: "True",
  };
  type PostProps = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  };

  const [valueSelect, setValueSelect] = useState("");
  const [multiSelectResult, setMultiSelectResult] = useState<string[]>([]);

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
    <div className="App">
      {PostSerw.Search.map(
        ({ Title, Year, imdbID, Type, Poster }: PostProps) => (
          <PostCard
            title={Title}
            year={Year}
            imdbID={imdbID}
            type={Type}
            poster={Poster}
            rating="7.6"
          />
        )
      )}

      <MultiSelect
        onClick={(a, b) => {
          const index = multiSelectResult.findIndex(
            (item) => item === b.option
          );
          if (index === -1) {
            setMultiSelectResult((state) => [...state, b.option]);
          } else {
            setMultiSelectResult((state) =>
              state.filter((el, i) => i !== index)
            );
          }
        }}
        options={[
          { option: "Сыр" },
          { option: "Молоко" },
          { option: "Вода" },
          { option: "Носки" },
          { option: "Сок" },
          { option: "Сосиски" },
        ]}
        placeholder="Email"
        title="Parapapa"
      ></MultiSelect>

      <button onClick={() => console.log(PostSerw.Search)}>ttt</button>
      <Arrow vector="" onClick={() => console.log("text")}></Arrow>
      <Link text="Link" image={<Home />}></Link>
      <div className="uuus">
        <User></User>
      </div>
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
        <SignInForm></SignInForm>
        <Selector
          onChange={chengeSelect}
          disabled={false}
          value={valueSelect}
          options={[
            { option: "Мышь" },
            { option: "Кот" },
            { option: "Сыр" },
            { option: "Молоко" },
            { option: "Mtv" },
          ]}
        ></Selector>
        <p>{valueSelect}</p>
      </div>
    </div>
  );
}

export default App;
