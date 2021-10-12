import style from './ShopCard.module.css';

import React from "react";

function ShopCard(item) {
  return (
    <>
      <a className={style.shop__card} href="shopCard/:id" id={item.id}>
        <div className={style.shop__card_inner}>
          <div
            className={style.shop__card_pic}
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <p className={style.shop__card_name}>{item.name}</p>

          <div className={style.shop__card_buttonbox}>
            <div className={style.shop__card_button}>
              <p className={style.shop__card_buttontext}>{item.price}рр</p>
            </div>

            <div className={style.shop__card_buttonsmall}>
              <div className={style.shop__card_buttonicon}></div>
            </div>
          </div>

          <p className={style.shop__card_text}>{item.available}</p>
        </div>
      </a>
    </>
  );
}

export default ShopCard;
