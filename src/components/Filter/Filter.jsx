import React from "react";

function Filter() {
  return (
    <>
      <div class="filter">
        <div class="filter__part">
          <ul class="filter__part_content">
            <li class="filter__part_list">
              <h5 class="filter__title">Категории:</h5>
            </li>

            <li class="filter__part_list">
              <p class="filter__text">Все</p>
            </li>

            <li class="filter__part_list">
              <p class="filter__text">Футболки</p>
            </li>

            <li class="filter__part_list">
              <p class="filter__text">Пледы</p>
            </li>

            <li class="filter__part_list">
              <p class="filter__text">Шарфы</p>
            </li>

            <li class="filter__part_list">
              <p class="filter__text filter__text_active">Кружки</p>
            </li>

            <li class="filter__part_list">
              <p class="filter__text">Буклеты</p>
            </li>

            <li class="filter__part_list">
              <p class="filter__text">Еще товары</p>
            </li>

            <li class="filter__part_list">
              <p class="filter__text">И еще товары</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Filter;
