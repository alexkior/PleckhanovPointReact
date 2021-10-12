import style from './Filters.module.css';
import React from "react";
import Filter from "../Filter/Filter";

function Filters() {
  return (
    <>
      <div className={style.shop__filters}>
        <Filter />

        <Filter />

        <Filter />
      </div>
    </>
  );
}

export default Filters;
