import React, { useState } from "react";
import { Filters } from "../Filters";
import "./filterButton.css";

export const FilterButton = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div>
      <div
        className="filter-btn"
        onClick={() => setMenuActive(!menuActive)}
      ></div>
      <Filters activ={menuActive} setActive={setMenuActive} />
    </div>
  );
};
export default FilterButton;
