import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Link,
} from "../../../node_modules/react-router-dom";
import { makeStyles } from "../../../node_modules/@material-ui/core/styles";
import Badge from "../../../node_modules/@material-ui/core/Badge";
import Carousel from "../../../node_modules/react-material-ui-carousel";
import autoBind from "../../../node_modules/auto-bind";
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

// const useStyles = makeStyles({
//   root: {
//     position: "fixed",
//     // flexGrow: 1,
//     maxWidth: "100%",
//   },
// });

function Project(props) {
  return (
    <Paper
      className="Project"
      style={{
        backgroundColor: props.item.color,
      }}
      elevation={10}
    >
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

const items = [
  {
    name: "Lear Music Reader",
    description: "A PDF Reader specially designed for musicians.",
    color: "#64ACC8",
  },
  {
    name: "Hash Code 2019",
    description:
      "My Solution on the 2019 Hash Code by Google Slideshow problem.",
    color: "#7D85B1",
  },
  {
    name: "Terrio",
    description: "A exciting mobile game game made in the Unity Engine.",
    color: "#CE7E78",
  },
  {
    name: "React Carousel",
    description: "A Generic carousel UI component for React using material ui.",
    color: "#C9A27E",
  },
];

function Header() {
  // const classes = useStyles();
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <>
      <header class="header">
        <section class="header__wrapper">
          <div class="header__inner">
            <nav class="header__nav-bar">
              {/* <a href="" class="header__nav header__nav_active"> */}
              <a href="" class="header__nav">
                <Link to="/Pp">
                  <p class="header__nav-text">PP</p>
                </Link>
              </a>

              <a href="" class="header__nav">
                <Link to="/About">
                  <p class="header__nav-text">О ПРОЕКТЕ</p>
                </Link>
              </a>

              <a href="" class="header__nav">
                <Link to="/Events">
                  <p class="header__nav-text">МЕРОПРИЯТИЯ</p>
                </Link>
              </a>

              <a href="" class="header__nav">
                <Link to="/Shop">
                  <p class="header__nav-text">МАГАЗИН</p>
                </Link>
              </a>

              <a href="" class="header__nav header__nav_profile">
                <Link to="/Profile">
                  <p class="header__nav-text">Максим</p>
                </Link>
                <div class="header__nav_scores">
                  <Badge badgeContent={1000} max={999} />
                  {/* <p class="header__nav_scores-text">12k pp</p> */}
                </div>
              </a>
            </nav>

            <div class="header__title-box">
              <h1 class="header__title">Plekhanov Point</h1>

              <p class="header__subtitle">
                Российский экономический университет им. Г.В. Плеханова
              </p>
            </div>
            <div class="switcher">
              <p class="header__subtitle">Главные мероприятия:</p>

              <div class="switcher__body">
                {/* <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-next"></div> */}
              </div>
            </div>
          </div>
        </section>
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            {/* <img
              src="../public/img/slide-1.jpg"
              class="slide-gray swiper-slide"
              alt="картинка"
            />
            <img
              src="../public/img/slide-2.jpg"
              class="slide-gray swiper-slide"
              alt="картинка"
            />
            <img
              src="../public/img/slide-1.jpg"
              class="slide-gray swiper-slide"
              alt="картинка"
            /> */}

            <Carousel
              className="SecondExample"
              // autoPlay={this.state.autoPlay}
              // animation={this.state.animation}
              // indicators={this.state.indicators}
              // timeout={this.state.timeout}
              // navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
              // navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
            >
              {items.map((item, index) => {
                return <Project item={item} key={index} />;
              })}
            </Carousel>
          </div>
        </div>

        <Paper square className='nav-adaptive'>
        {/* <Paper square className={classes.root}> */}
          <Tabs
            className="nav-adaptive__nav-bar"
            // value={value}
            // onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            aria-label=""
          >
            <Link to="/Pp">
              <Tab className="nav-adaptive__nav" icon={<AccountBalanceWalletIcon />} aria-label="" />
            </Link>

            <Link to="/About">
              <Tab className="nav-adaptive__nav" icon={<InfoIcon />} aria-label="" />
            </Link>

            <Link to="/Events">
              <Tab className="nav-adaptive__nav" icon={<EventIcon />} aria-label="" />
            </Link>

            <Link to="/Shop">
              <Tab className="nav-adaptive__nav" icon={<ShoppingBasketIcon />} aria-label="" />
            </Link>

            <Link to="/Profile">
              <Tab className="nav-adaptive__nav" icon={<AccountCircleIcon />} aria-label="" />
            </Link>
          </Tabs>
        </Paper>
      </header>
    </>
  );
}

export default Header;
