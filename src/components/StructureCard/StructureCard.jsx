import React from "react";

function StructureCard() {
  return (
    <>
      <a class="event__card" href="shopCard">
        <div class="event__card_inner">
          <h4 class="event__card_name">Название структуры</h4>

          <div class="event__card_info-box">
            <p class="event__card_info-title">Информация:</p>

            <p class="event__card_info-text">Информация</p>
          </div>

          <div class="event__card_info-box">
            <p class="event__card_info-title">Информация:</p>

            <p class="event__card_info-text">Информация</p>
          </div>

          <div class="event__card_info-box">
            <p class="event__card_info-title">Информация:</p>

            <p class="event__card_info-text">Информация</p>
          </div>

          <div class="event__card_info-box">
            <p class="event__card_info-title">Информация:</p>

            <p class="event__card_info-text">
              Информация
              <br />
              Информация
              <br />
              Информация
              <br />
              Информация
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

export default StructureCard;
