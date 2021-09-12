function ShopperCard(params) {
  return (
    <>
      <a class="shopper__card" href="">
        <div class="shopper__card_inner">
          <div class="shopper__card_pic"></div>

          <p class="shopper__card_name">Термокружка РЭУ</p>

          <div class="shopper__card_button-box">
            <div class="shopper__card_button">
              <p class="shopper__card_button-text">1600 рp</p>
            </div>

            <div class="shopper__card_button-small">
              <div class="shopper__card_button-icon"></div>
            </div>
          </div>

          <p class="shopper__card_text">Товар на складе</p>
        </div>
      </a>
    </>
  );
}

export default ShopperCard;
