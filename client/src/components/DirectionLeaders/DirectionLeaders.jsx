import style from "./DirectionLeaders.module.css";
import DirectionLeader from "../DirectionLeader/DirectionLeader";

import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDirectionLeaders } from "../../redux/actions/directionleaders.actions.js";

import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import AccessibleIcon from "@material-ui/icons/Accessible";

function DirectionLeaders(params) {
  const dispatch = useDispatch();
  const { directionLeadersList, isLoading, error } = useSelector(
    (state) => state.directionLeaders
  );

  useEffect(() => {
    dispatch(getDirectionLeaders());
  }, []);

  return (
    <section class="main__section direction-leaders">
      <div class="main__title-box">
        <h3 class="main__title">Лидеры направлений:</h3>

        <div class="main__title-icon"></div>
      </div>

      <div className={style.directionLeaders__content}>
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
            {directionLeadersList &&
              directionLeadersList.map((item, index) => (
                <DirectionLeader key={index} {...item} />
              ))}
          </>
        )}
      </div>
    </section>
  );
}

export default memo(DirectionLeaders);
