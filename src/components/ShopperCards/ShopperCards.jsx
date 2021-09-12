import ShopperCard from "../ShopperCard/ShopperCard";

function ShopperCards(params) {
  return (
    <>
      <section class="shopper__section">
        <section class="shopper__section_background">
          <div class="shopper__inner">
            <div class="shopper__title-box">
              <h1 class="shopper__title">Магазин</h1>
            </div>

            <div class="shopper__cards">
              <ShopperCard />

              <ShopperCard />

              <ShopperCard />

              <ShopperCard />
            </div>

            <div class="switcher">
              <p class="shopper__subtitle">Статистика:</p>

              <div class="switcher__body"></div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default ShopperCards;
