import React from "react";

function StructurePreview() {
  return (
    <>
      <a class="structure-preview__card" href="">
        <div class="structure-preview__card_inner">
          <img
            class="structure-preview__card_icon"
            src="../../public/img/logo_SK.png"
          />

          <div class="structure-preview__card_text-part">
            <h4 class="structure-preview__card_title">
              Студенческий спортивный клуб РЭУ им. Г.В. Плеханова
            </h4>

            <p class="structure-preview__card_text">
              Мероприятий на платформе: 1000
            </p>
          </div>
        </div>
      </a>
    </>
  );
}

export default StructurePreview;
