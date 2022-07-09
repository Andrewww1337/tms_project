import React, { useRef, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { Button } from "../Button";
import { ButtonsGroup } from "../ButtonsGroup";
import { Input } from "../input";
import { MultiSelect } from "../MultiSelect";
import { Tabs } from "../Tabs";
import { delPost } from "../../features/posts";
import { getPost, getProps, delProps } from "../../features/posts";
import "./filters.css";
import { Selector } from "../Selector";

type MenuProps = {
  activ: boolean;
  setActive: (value: boolean) => void;
};

export const Filters = ({ activ, setActive }: MenuProps) => {
  const dispatch = useAppDispatch();
  const [multiSelectResult, setMultiSelectResult] = useState<string[]>([]);
  const [typeSelect, setTypeSelect] = useState("");
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [activRating, setActivRating] = useState(false);
  const [activYear, setActivYear] = useState(false);

  const onYearButtonChange = () => {
    if (year == "2022") {
      setYear("");
    } else {
      setYear("2022");
    }
    setActivRating(false);
    setActivYear(!activYear);
  };
  const onRatingButtonChange = () => {
    setYear("");
    setActivYear(false);
    setActivRating(!activRating);
  };
  const onYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYear(event.target.value);
  };

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  function chengeSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    if (event.target.value !== "Select genre") {
      setTypeSelect(event.target.value);
    }
    if (event.target.value == "Select genre") {
      setTypeSelect("");
    }
  }

  const onSearchChange = () => {
    dispatch(delPost(null));
    dispatch(delProps("2"));
    dispatch(
      getPost(`&s=${String(name)}&type=${typeSelect}&y=${String(year)}&page=1`)
    );
    dispatch(getProps(`&s=${String(name)}&page=1`));
    console.log(year);
  };
  const onClearSearchChange = () => {
    dispatch(delPost(null));
    dispatch(getProps("y2022&s=all&page=1"));
    dispatch(getPost("y2022&s=all&page=1"));
    dispatch(delProps("2"));
    setName("");
    setTypeSelect("");
    setYear("");
  };

  return (
    <div className={activ ? "menu active" : "menu"}>
      <div className="menu__content">
        <div className="menu_filters">
          <div>
            <div className="filtersElementWidthTwoShild">
              <h2>Filters</h2>
              <button
                className="filtersCloser"
                onClick={() => setActive(false)}
              ></button>
            </div>
            <div className="filtersElement">
              <label>Sort by</label>
              <Tabs
                textFifstButton="Rating"
                textSecondButton="Year"
                onClickFirstButton={onRatingButtonChange}
                onClickSecondButton={onYearButtonChange}
                extraClassSecondButton={activYear ? "activButton" : ""}
                extraClassFirstButton={activRating ? "activButton" : ""}
                disabled={false}
              ></Tabs>
            </div>
            <div className="filtersElement">
              <Input
                title="Full or short movie name"
                placeholder="Your text"
                value={name}
                type="text"
                error={false}
                errorMessage="Error text"
                onChange={onNameChange}
              ></Input>
            </div>
            <div className="filtersElement">
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
                  { option: "Action" },
                  { option: "Comedy" },
                  { option: "Drama" },
                  { option: "Fantasy" },
                  { option: "Horror" },
                ]}
                placeholder="Select"
                title="Genre"
              ></MultiSelect>
            </div>
            <div className="filtersElementWidthTwoShild">
              <div className="oneFilterElement">
                <Input
                  title="Year of release"
                  placeholder="Year"
                  value={year}
                  type="text"
                  error={false}
                  errorMessage="Error text"
                  onChange={onYearChange}
                ></Input>
              </div>
              <div className="oneFilterElement">
                <Selector
                  onChange={chengeSelect}
                  disabled={false}
                  value={typeSelect}
                  title="Type"
                  options={[
                    { option: "Select type" },
                    { option: "Movie" },
                    { option: "Series" },
                    { option: "Episode" },
                  ]}
                ></Selector>
              </div>
            </div>
          </div>
          <div>
            <div className="filtersElementWidthTwoShild">
              <div className="oneFilterElement">
                <Button
                  onClick={onClearSearchChange}
                  text="Clear filter"
                  disabled={false}
                  className="secondary"
                ></Button>
              </div>
              <div className="oneFilterElement">
                <Button
                  onClick={onSearchChange}
                  text="Show results"
                  disabled={false}
                  className="primary"
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
