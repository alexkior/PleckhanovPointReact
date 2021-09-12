import React from "react";

function SearchBar() {
  return (
    <>
      <div class="main__search">
        <input type="text" class="main__search_input" />

        <div class="main__search_button">
          <p class="main__search_text">Поиск</p>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
