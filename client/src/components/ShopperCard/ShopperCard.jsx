import style from "./ShopperCard.module.css";

function ShopperCard(item) {
  return (
    <>
      <a className={style.shopper__card} href="" id={item.id}>
        <div className={style.shopper__card_inner}>
          <div
            className={style.shopper__card_pic}
            style={{
              backgroundImage: `url(${item.pic})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <p className={style.shopper__card_name}>{item.name}</p>

          <div className={style.shopper__card_buttonbox}>
            <div className={style.shopper__card_button}>
              <p className={style.shopper__card_buttontext}>{item.price} рp</p>
            </div>

            <div className={style.shopper__card_buttonsmall}>
              <div className={style.shopper__card_buttonicon}></div>
            </div>
          </div>

          <p className={style.shopper__card_text}>{item.isPresent}</p>
        </div>
      </a>
    </>
  );
}

export default ShopperCard;
