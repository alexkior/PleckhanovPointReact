import React from "react";

import { makeStyles, withStyles } from "../../../node_modules/@material-ui/core/styles";
import PropTypes from "../../../node_modules/prop-types";
import Rating from "../../../node_modules/@material-ui/lab/Rating";

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

        <div class="profile-table__header">
          <div class="profile-table__header_box">
            <p class="profile-table__header_text">№</p>
          </div>

          <div class="profile-table__header_box">
            <p class="profile-table__header_text">Мероприятие</p>
          </div>

          <div class="profile-table__header_box">
            <p class="profile-table__header_text">Дата</p>
          </div>

          <div class="profile-table__header_box">
            <p class="profile-table__header_text">Направление</p>
          </div>

          <div class="profile-table__header_box">
            <p class="profile-table__header_text">Организатор</p>
          </div>

          <div class="profile-table__header_box">
            <p class="profile-table__header_text">Роль</p>
          </div>

          <div class="profile-table__header_box">
            <p class="profile-table__header_text">Опиши функцинал</p>
          </div>

          <div class="profile-table__header_box">
            <p class="profile-table__header_text">Оцени мероприятие</p>
          </div>

          <div class="profile-table__header_box">
            <p class="profile-table__header_text">Начислено рр.</p>
          </div>
        </div>

        <div class="profile-table__row">
          <div class="profile-table__row_box-centered">
            <p class="profile-table__row_text">1</p>
          </div>

          <div class="profile-table__row_box">
            <p class="profile-table__row_text">Плехановский кросс</p>
          </div>

          <div class="profile-table__row_box-centered">
            <p class="profile-table__row_text">25.05.2022</p>
          </div>

          <div class="profile-table__row_box-centered">
            <p class="profile-table__row_text">Спорт</p>
          </div>

          <div class="profile-table__row_box-centered">
            <p class="profile-table__row_text">ССК</p>
          </div>

          <div class="profile-table__row_box-centered">
            <p class="profile-table__row_text">Организатор</p>
          </div>

          <div class="profile-table__row_box-centered profile-table__row_box-button">
            <p class="profile-table__row_button-text">Редактиртовать</p>
          </div>

          <div class="profile-table__row_box-centered">
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </div>

          <div class="profile-table__row_box-centered">
            <p class="profile-table__row_text">200</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProfileTable;
