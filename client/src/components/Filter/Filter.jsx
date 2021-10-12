import style from './Filter.module.css';
import React from "react";

function Filter() {
  return (
    <>
      <div className={style.filter}>
        <div className={style.filter__part}>
          <ul className={style.filter__part_content}>
            <li className={style.filter__part_list}>
              <h5 className={style.filter__title}>Категории:</h5>
            </li>

            <li className={style.filter__part_list}>
              <p className={style.filter__text}>Все</p>
            </li>

            <li className={style.filter__part_list}>
              <p className={style.filter__text}>Футболки</p>
            </li>

            <li className={style.filter__part_list}>
              <p className={style.filter__text}>Пледы</p>
            </li>

            <li className={style.filter__part_list}>
              <p className={style.filter__text}>Шарфы</p>
            </li>

            <li className={style.filter__part_list}>
              <p className={`${style.filter__text} ${style.filter__text_active}`}>Кружки</p>
            </li>

            <li className={style.filter__part_list}>
              <p className={style.filter__text}>Буклеты</p>
            </li>

            <li className={style.filter__part_list}>
              <p className={style.filter__text}>Еще товары</p>
            </li>

            <li className={style.filter__part_list}>
              <p className={style.filter__text}>И еще товары</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Filter;
