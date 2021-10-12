import style from "./FieldCards.module.css";
import FieldCard from "../FieldCard/FieldCard";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFieldCards } from "../../redux/actions/fieldcards.actions.js";

import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import AccessibleIcon from "@material-ui/icons/Accessible";

function FieldCards() {
  const dispatch = useDispatch();
  const { fieldCardsList, isLoading, error } = useSelector(
    (state) => state.fieldCards
  );

  useEffect(() => {
    dispatch(getFieldCards());
  }, []);

  return (
    <section class="main__section field-cards">
      <div class="main__title-box">
        <h3 class="main__title">Активных мероприятий на платформе:</h3>

        <div class="main__title-icon"></div>
      </div>

      <div className={style.fieldCards__content}>
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
            {fieldCardsList &&
              fieldCardsList.map((item, index) => (
                <FieldCard key={index} {...item} />
              ))}
          </>
        )}
      </div>
    </section>
  );
}

export default memo(FieldCards);
