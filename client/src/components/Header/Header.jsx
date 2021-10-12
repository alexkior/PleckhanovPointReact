import style from "./Header.module.css";

import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
} from "../../../node_modules/react-router-dom";

import SvgIcon from "@mui/material/SvgIcon";
import Home from "@material-ui/icons/Home";

import HeaderBackground from "../HeaderBackground/HeaderBackground.jsx";
import { makeStyles } from "../../../node_modules/@material-ui/core/styles";
import Badge from "../../../node_modules/@material-ui/core/Badge";

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

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";

import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import InfoIcon from "@material-ui/icons/Info";
import EventIcon from "@material-ui/icons/Event";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import Carousel from "react-material-ui-carousel";
import Image1 from "../../img/slide-1.jpg";
import Image2 from "../../img/slide-2.jpg";
import Image3 from "../../img/slide-3.jpg";

function Header() {
  function Project(props) {
    return (
      <Paper
        className={style.header__background}
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

  const [navButtonsAlwaysVisible, setNavButtonsAlwaysVisible] = useState(false);
  const auth = useSelector((state) => state.auth);

  return (
    <>
      <header className={style.header}>
        <section className={style.header__wrapper}>
          <div className={style.header__inner}>
            <nav className={style.header__navbar}>
              {/* <a href="" className={style.header__nav header__nav_active"> */}

              <Link to="/Pp" className={style.header__nav}>
                <p className={style.header__navtext}>PP</p>
              </Link>

              <Link to="/About" className={style.header__nav}>
                <p className={style.header__navtext}>О ПРОЕКТЕ</p>
              </Link>

              <Link to="/Events" className={style.header__nav}>
                <p className={style.header__navtext}>МЕРОПРИЯТИЯ</p>
              </Link>

              <Link to="/Shop" className={style.header__nav}>
                <p className={style.header__navtext}>МАГАЗИН</p>
              </Link>
              {auth?.usersIn?.length >= 1 ? (
                <Link
                  to="/Profile"
                  className={`${style.header__nav} ${style.header__nav_profile}`}
                >
                  <p className={style.header__navtext}>Максим</p>
                  <div className={style.header__nav_scores}>
                    <Badge badgeContent={1000} max={999} />
                    {/* <p className={style.header__nav_scores-text">12k pp</p> */}
                  </div>
                </Link>
              ) : (
                <Link
                  to="/Auth"
                  className={`${style.header__nav} ${style.header__nav_profile}`}
                >
                  <p className={style.header__navtext}>ВОЙТИ</p>
                </Link>
              )}
            </nav>

            <div className={style.header__titlebox}>
              <h1 className={style.header__title}>Plekhanov Point</h1>

              <p className={style.header__subtitle}>
                Российский экономический университет им. Г.В. Плеханова
              </p>
            </div>
            <div class="switcher">
              <p className={style.header__subtitle}>Главные мероприятия:</p>

              <div class="switcher__body"></div>
            </div>
          </div>
        </section>
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <Carousel
              navButtonsAlwaysVisible={navButtonsAlwaysVisible}
              // navButtonsProps={{style: {backgroundColor: '#ffffff', borderRadius: 50}}}
              // navButtonsWrapperProps={{ style: { bottom: '0', top: '0' } }}
              // fullHeightHover={false}
              //   NavButton={({onClick, header__background_nav, style, next, prev}) => {
              //     return (
              //         <Button onClick={onClick} className={header__background_nav} style={style}>
              //             {next && "Next"}
              //             {prev && "Previous"}
              //         </Button>
              //     )
              // }}
            >
              {items.map((item, index) => {
                return <Project item={item} key={index} />;
              })}
            </Carousel>
          </div>
        </div>

        <Paper square className={style.navadaptive}>
          {/* <Paper square className={classes.root}> */}
          <Tabs
            className={style.navadaptive__navbar}
            // value={value}
            // onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            aria-label=""
          >
            <Link to="/Pp">
              <Tab
                className={style.navadaptive__nav}
                icon={<AccountBalanceWalletIcon style={{ color: "white" }} />}
                aria-label=""
              />
            </Link>

            <Link to="/About">
              <Tab
                className={style.navadaptive__nav}
                icon={<InfoIcon style={{ color: "white" }} />}
                aria-label=""
              />
            </Link>

            <Link to="/Events">
              <Tab
                className={style.navadaptive__nav}
                icon={<EventIcon style={{ color: "white" }} />}
                aria-label=""
              />
            </Link>

            <Link to="/Shop">
              <Tab
                className={style.navadaptive__nav}
                icon={<ShoppingBasketIcon style={{ color: "white" }} />}
                aria-label=""
              />
            </Link>

            <Link to="/Profile">
              <Tab
                className={style.navadaptive__nav}
                icon={<AccountCircleIcon style={{ color: "white" }} />}
                aria-label=""
              />
            </Link>
          </Tabs>
        </Paper>
      </header>
    </>
  );
}

export default Header;
