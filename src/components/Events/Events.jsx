import SearchBar from "../SearchBar/SearchBar.jsx";

import Filters from "../Filters/Filters";

import EventCards from "../EventCards/EventCards";

function Events() {
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

        <EventCards />
      </section>
    </>
  );
}

export default Events;
