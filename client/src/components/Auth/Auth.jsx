import style from "./Auth.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Link,
} from "../../../node_modules/react-router-dom";
import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { getAuth } from "../../redux/actions/auth.actions.js";

function Auth() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(getAuth());
  };

  return (
    <>
      <section className={style.auth}>
        <form onSubmit={handleSubmit}>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            className={style.auth__card}
          >
            Войти
          </Button>
        </form>
      </section>
    </>
  );
}

export default memo(Auth);
