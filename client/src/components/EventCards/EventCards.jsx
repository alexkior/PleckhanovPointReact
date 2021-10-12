import style from "./EventCards.module.css";

import React from "react";
import EventCard from "../EventCard/EventCard";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEventCards } from "../../redux/actions/events.actions.js";

import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import AccessibleIcon from "@material-ui/icons/Accessible";

function EventCards() {
  const dispatch = useDispatch();
  const { eventList, isLoading, error } = useSelector(
    (state) => state.eventCards
  );

  useEffect(() => {
    dispatch(getEventCards());
  }, []);

  return (
    <>
      <div className={style.event__cards}>
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
            {eventList &&
              eventList.map((item, index) => (
                <EventCard key={index} {...item} />
              ))}
          </>
        )}
      </div>
    </>
  );
}

export default memo(EventCards);
