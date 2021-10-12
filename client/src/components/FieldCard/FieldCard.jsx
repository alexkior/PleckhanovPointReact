import style from './FieldCard.module.css';
import FieldPic from "../../img/svg/field-icon.svg"

function FieldCard(item) {


  return (
    <>
      <a className={style.fieldCard} href="" id={item.id}>
        <div className={style.fieldCard__inner}>
          <div
            className={style.fieldCard__icon}
            style={{
              mask: `url(${item.pic})`,
              WebkitMask: `url(${item.pic})`,
              backgroundSize: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: "#104690"
            }}
          ></div>

          <div className={style.fieldCard__textPart}>
            <h4 className={style.fieldCard__title}>{item.name}</h4>

            <p className={style.fieldCard__text}>Мероприятий на платформе: {item.events}</p>
          </div>
        </div>
      </a>
    </>
  );
}

export default FieldCard;
