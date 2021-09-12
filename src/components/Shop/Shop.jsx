import SearchBar from '../SearchBar/SearchBar.jsx'

import Filters from "../Filters/Filters";

import ShopCards from "../ShopCards/ShopCards";

function Shop() {
  return (
    <>
      <section class="main__section main__title-only">
        <div class="main__title-box">
          <h3 class="main__title">Магазин:</h3>

          <div class="main__title-icon"></div>
        </div>

        <SearchBar />
      </section>

      <section class="main__section_partial">
        <Filters />

        <ShopCards />
      </section>
    </>
  );
}

export default Shop;
