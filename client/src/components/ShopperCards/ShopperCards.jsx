import style from "./ShopperCards.module.css";

import ShopperCard from "../ShopperCard/ShopperCard";
import HeaderBackground from "../HeaderBackground/HeaderBackground";

import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShopperCards } from "../../redux/actions/shoppercards.actions.js";

import CircularProgress from "@material-ui/core/CircularProgress";
import AccessibleIcon from "@material-ui/icons/Accessible";

import {
  FormLabel,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  Paper,
  Button,
  Slider,
  Typography,
  CardMedia,
  Slide,
} from "../../../node_modules/@material-ui/core";

import Carousel from "react-material-ui-carousel";
import Image1 from "../../img/slide-1.jpg";
import Image2 from "../../img/slide-2.jpg";
import Image3 from "../../img/slide-3.jpg";

function ShopperCards() {

  function Project(props) {
    return (
      <Paper
        className={style.shopper__section_carouselbackground}
        style={{
          backgroundImage: `url(${props.item.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%)",
        }}
        elevation={10}
      ></Paper>
    );
  }

  const items = [
    {
      img: Image1,
    },
    {
      img: Image2,
    },
    {
      img: Image3,
    },
  ];

  const dispatch = useDispatch();
  const { shopperCardsList, isLoading, error } = useSelector(
    (state) => state.shopperCards
  );

  useEffect(() => {
    dispatch(getShopperCards());
  }, []);

  return (
    <>
      <section className={style.shopper__section}>
        <section className={style.shopper__section_background}>
          <div className={style.shopper__inner}>
            <div className={style.shopper__titlebox}>
              <h1 className={style.shopper__title}>Магазин</h1>
            </div>

            <div className={style.shopper__cards}>
              {isLoading ? (
                <p>
                  <CircularProgress />
                </p>
              ) : error ? (
                <Paper>
                  <AccessibleIcon fontSize="large"></AccessibleIcon>
                </Paper>
              ) : (
                <>
                  {shopperCardsList &&
                    shopperCardsList.map((item, index) => (
                      <ShopperCard key={index} {...item} />
                    ))}
                </>
              )}
            </div>

            <div class="switcher">
              <p className={style.shopper__subtitle}>Статистика:</p>

              <div class="switcher__body"></div>
            </div>
          </div>
        </section>

        <div className={style.shopper__section_carousel}>
          <Carousel>
            {items.map((item, index) => {
              return <Project item={item} key={index} />;
            })}
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default memo(ShopperCards);
