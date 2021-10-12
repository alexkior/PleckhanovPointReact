import style from './EventCard.module.css';

import React from "react";

function EventCard(item) {
  return (
    <>
      <a className={style.event__card} href="eventCard/:id" id={item.id}>
        <div className={style.event__card_inner}>
          <h4 className={style.event__card_name}>{item.name}</h4>

          <div className={style.event__card_infobox}>
            <p className={style.event__card_infotitle}>Организатор:</p>

            <p className={style.event__card_infotext}>{item.manager}</p>
          </div>

          <div className={style.event__card_infobox}>
            <p className={style.event__card_infotitle}>Направление:</p>

            <p className={style.event__card_infotext}>{item.direction}</p>
          </div>

          <div className={style.event__card_infobox}>
            <p className={style.event__card_infotitle}>Дата:</p>

            <p className={style.event__card_infotext}>{item.date}</p>
          </div>

          <div className={style.event__card_infobox}>
            <p className={style.event__card_infotitle}>Доступные роли:</p>

            <p className={style.event__card_infotext}>
              Участник
              <br />
              Пресс-атташе
              <br />
              Зритель
              <br />
              Менеджер
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

export default EventCard;
