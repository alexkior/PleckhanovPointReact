import style from './StructurePreview.module.css';
import React from "react";
import StructurePreviewPic from "../../img/logo_SK.png";

function StructurePreview(item) {
  return (
    <>
      <a className={style.structurePreview__card} href="" id={item.id}>
        <div className={style.structurePreview__card_inner}>
          <div
            className={style.structurePreview__card_icon}
            style={{
              backgroundImage: `url(${item.pic})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className={style.structurePreview__card_textPart}>
            <h4 className={style.structurePreview__card_title}>
              {item.name}
            </h4>

            <p className={style.structurePreview__card_text}>
              Мероприятий на платформе: {item.events}
            </p>
          </div>
        </div>
      </a>
    </>
  );
}

export default StructurePreview;
