import React from "react";

function EventCard() {
  return (
    <>
      <a class="event__card" href="shopCard">
        <div class="event__card_inner">
          <h4 class="event__card_name">Плехановский кросс 2022</h4>

          <div class="event__card_info-box">
            <p class="event__card_info-title">Организатор:</p>

            <p class="event__card_info-text">Спортивный клуб</p>
          </div>

          <div class="event__card_info-box">
            <p class="event__card_info-title">Направление:</p>

            <p class="event__card_info-text">Спорт</p>
          </div>

          <div class="event__card_info-box">
            <p class="event__card_info-title">Дата:</p>

            <p class="event__card_info-text">15.05.2022</p>
          </div>

          <div class="event__card_info-box">
            <p class="event__card_info-title">Доступные роли:</p>

            <p class="event__card_info-text">
              Участник
              <br />
              Пресс-атташе
              <br />
              Зритель
              <br />
              Менеджер
            </p>
          </div>

          <div class="event__card_button">
            <p class="event__card_button-text">ПОДРОБНЕЕ</p>
          </div>
        </div>
      </a>
    </>
  );
}

export default EventCard;
