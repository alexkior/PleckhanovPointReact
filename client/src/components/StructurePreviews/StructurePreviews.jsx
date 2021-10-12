import style from "./StructurePreviews.module.css";
import React from "react";

import { BrowserRouter as Router, Switch, Link } from "react-router-dom";

import StructurePreview from "../StructurePreview/StructurePreview.jsx";

import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStructurePreviews } from "../../redux/actions/structurepreviews.actions.js";

import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import AccessibleIcon from "@material-ui/icons/Accessible";

function StructurePreviews() {
  const dispatch = useDispatch();
  const { structurePreviewsList, isLoading, error } = useSelector(
    (state) => state.structurePreviews
  );

  useEffect(() => {
    dispatch(getStructurePreviews());
  }, []);

  return (
    <>
      <section class="main__section structure-preview">
        <div class="main__title-box">
          <h3 class="main__title">Все структуры:</h3>

          <div class="main__title-icon"></div>
        </div>

        <div className={style.structurePreview__content}>
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
              {structurePreviewsList &&
                structurePreviewsList.map((item, index) => (
                  <StructurePreview key={index} {...item} />
                ))}
            </>
          )}
        </div>

        <div class="main__button_part">
          <a href="" class="main__button">
            <p class="main__button_text">Все структуры</p>
          </a>
        </div>
      </section>
    </>
  );
}

export default memo(StructurePreviews);
