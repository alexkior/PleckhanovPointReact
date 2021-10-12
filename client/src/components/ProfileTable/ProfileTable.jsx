import React from "react";

import { makeStyles, withStyles } from "../../../node_modules/@material-ui/core/styles";
import PropTypes from "../../../node_modules/prop-types";
import Rating from "../../../node_modules/@material-ui/lab/Rating";

import style from './ProfileTable.module.css';

function ProfileTable() {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));

  RatingInputValue.propTypes = {
    applyValue: PropTypes.func.isRequired,
    item: PropTypes.shape({
      columnField: PropTypes.string,
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      operatorValue: PropTypes.string,
      value: PropTypes.any,
    }).isRequired,
  };

  function RatingInputValue(props) {
    const classes = useStyles();
    const { item, applyValue } = props;

    const handleFilterChange = (event) => {
      applyValue({ ...item, value: event.target.value });
    };

    return (
      <div className={classes.root}>
        <Rating
          name="custom-rating-filter-operator"
          placeholder="Filter value"
          value={Number(item.value)}
          onChange={handleFilterChange}
          precision={0.5}
        />
      </div>
    );
  }

  return (
    <>
      <section class="main__section profile-table">
        <div class="main__title-box-start">
          <h3 class="main__title">История моих мероприятий:</h3>

          <div class="main__title-icon"></div>
        </div>

        <div className={style.profileTable__header}>
          <div className={style.profileTable__header_box}>
            <p className={style.profileTable__header_text}>№</p>
          </div>

          <div className={style.profileTable__header_box}>
            <p className={style.profileTable__header_text}>Мероприятие</p>
          </div>

          <div className={style.profileTable__header_box}>
            <p className={style.profileTable__header_text}>Дата</p>
          </div>

          <div className={style.profileTable__header_box}>
            <p className={style.profileTable__header_text}>Направление</p>
          </div>

          <div className={style.profileTable__header_box}>
            <p className={style.profileTable__header_text}>Организатор</p>
          </div>

          <div className={style.profileTable__header_box}>
            <p className={style.profileTable__header_text}>Роль</p>
          </div>

          <div className={style.profileTable__header_box}>
            <p className={style.profileTable__header_text}>Опиши функцинал</p>
          </div>

          <div className={style.profileTable__header_box}>
            <p className={style.profileTable__header_text}>Оцени мероприятие</p>
          </div>

          <div className={style.profileTable__header_box}>
            <p className={style.profileTable__header_text}>Начислено рр.</p>
          </div>
        </div>

        <div className={style.profileTable__row}>
          <div className={style.profileTable__row_boxCentered}>
            <p className={style.profileTable__row_text}>1</p>
          </div>

          <div className={style.profileTable__row_box}>
            <p className={style.profileTable__row_text}>Плехановский кросс</p>
          </div>

          <div className={style.profileTable__row_boxCentered}>
            <p className={style.profileTable__row_text}>25.05.2022</p>
          </div>

          <div className={style.profileTable__row_boxCentered}>
            <p className={style.profileTable__row_text}>Спорт</p>
          </div>

          <div className={style.profileTable__row_boxCentered}>
            <p className={style.profileTable__row_text}>ССК</p>
          </div>

          <div className={style.profileTable__row_boxCentered}>
            <p className={style.profileTable__row_text}>Организатор</p>
          </div>

          <div className={`${style.profileTable__row_boxCentered} ${style.profileTable__row_boxButton}`}>
            <p className={style.profileTable__row_buttonText}>Редактиртовать</p>
          </div>

          <div className={style.profileTable__row_boxCentered}>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </div>

          <div className={style.profileTable__row_boxCentered}>
            <p className={style.profileTable__row_text}>200</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProfileTable;
