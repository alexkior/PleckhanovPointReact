import React from "react";

function ShopCard() {
  return (
    <>
      <a class="shop__card" href="shopCard">
        <div class="shop__card_inner">
          <div class="shop__card_pic"></div>

          <p class="shop__card_name">Термокружка РЭУ</p>

          <div class="shop__card_button-box">
            <div class="shop__card_button">
              <p class="shop__card_button-text">1600 рp</p>
            </div>

            <div class="shop__card_button-small">
              <div class="shop__card_button-icon"></div>
            </div>
          </div>

          <p class="shop__card_text">Товар на складе</p>
        </div>
      </a>
    </>
  );
}

export default ShopCard;
