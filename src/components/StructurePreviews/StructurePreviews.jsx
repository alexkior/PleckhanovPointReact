import React from "react";

import { BrowserRouter as Router, Switch, Link } from "react-router-dom";

import StructurePreview from "../StructurePreview/StructurePreview.jsx";

function StructurePreviews() {
  return (
    <>
      <section class="main__section structure-preview">
        <div class="main__title-box">
          <h3 class="main__title">Все структуры:</h3>

          <div class="main__title-icon"></div>
        </div>

        <div class="structure-preview__content">
          <StructurePreview />

          <StructurePreview />

          <StructurePreview />

          <StructurePreview />
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

export default StructurePreviews;
