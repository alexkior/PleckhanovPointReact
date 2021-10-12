import style from './StructureCard.module.css';

import React from "react";

function StructureCard() {
  return (
    <>
      <a className={style.event__card} href="shopCard">
        <div className={style.event__card_inner}>
          <h4 className={style.event__card_name}>Название структуры</h4>

          <div className={style.event__card_infobox}>
            <p className={style.event__card_infotitle}>Информация:</p>

            <p className={style.event__card_infotext}>Информация</p>
          </div>

          <div className={style.event__card_infobox}>
            <p className={style.event__card_infotitle}>Информация:</p>

            <p className={style.event__card_infotext}>Информация</p>
          </div>

          <div className={style.event__card_infobox}>
            <p className={style.event__card_infotitle}>Информация:</p>

            <p className={style.event__card_infotext}>Информация</p>
          </div>

          <div className={style.event__card_infobox}>
            <p className={style.event__card_infotitle}>Информация:</p>

            <p className={style.event__card_infotext}>
              Информация
              <br />
              Информация
              <br />
              Информация
              <br />
              Информация
            </p>
          </div>

          <div className={style.event__card_button}>
            <p className={style.event__card_buttontext}>ПОДРОБНЕЕ</p>
          </div>
        </div>
      </a>
    </>
  );
}

export default StructureCard;
