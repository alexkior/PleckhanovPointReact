import React from "react";

import SearchBar from '../SearchBar/SearchBar.jsx'

import Filters from "../Filters/Filters";

import StructureCards from "../ShopCards/ShopCards";

function Structures() {
  return (
    <>
      <section class="main__section main__title-only">
        <div class="main__title-box">
          <h3 class="main__title">Мероприятия:</h3>

          <div class="main__title-icon"></div>
        </div>

        <SearchBar />
      </section>

      <section class="main__section_partial-events">
        <Filters />

        <StructureCards />
      </section>
    </>
  );
}

export default Structures;
