import style from './Footer.module.css';

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

function Footer() {
  function Project(props) {
    return (
      <Paper
        class="shopper__section_carousel-background"
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

  return (
    <>
            <footer className={style.footer}>
        <section className={style.footer_background}>
          <section className={style.footer__inner}>
            <div className={style.footer__part}>
              <ul className={style.footer__part_content}>
                <li className={style.footer__part_list}>
                  <h5 className={style.footer__title}>КОНТАКТЫ</h5>
                </li>

                <li className={style.footer__part_list}>
                  <p className={style.footer__text}>pp@rea.ru</p>
                </li>

                <li className={style.footer__part_list}>
                  <p className={style.footer__text}>+7 (495) 222-22-22</p>
                </li>
              </ul>
            </div>

            <div className={style.footer__part}>
              <ul className={style.footer__part_content}>
                <li className={style.footer__part_list}>
                  <h5 className={style.footer__title}>НОВОСТИ</h5>
                </li>

                <li className={style.footer__part_list}>
                  <p className={style.footer__text}>@ppnews</p>
                </li>
              </ul>
            </div>

            <div className={style.footer__part}>
              <ul className={style.footer__part_content}>
                <li className={style.footer__part_list}>
                  <h5 className={style.footer__title}>ДОКУМЕНТЫ</h5>
                </li>

                <li className={style.footer__part_list}>
                  <p className={style.footer__text}>документ</p>
                </li>

                <li className={style.footer__part_list}>
                  <p className={style.footer__text}>документ</p>
                </li>
              </ul>
            </div>
          </section>
        </section>

        <div className={style.footer__section_carousel}> 
        <Carousel>
          {items.map((item, index) => {
            return <Project item={item} key={index} />;
          })}
        </Carousel>
        </div>
      </footer>
    </>
  );
}

export default Footer;
