import style from './DirectionLeader.module.css';
import Leader from "../../img/maks.png";

function DirectionLeader(item) {
  return (
    <div className={style.directionLeaders__card} id={item.id}>
      <div className={style.directionLeaders__card_inner}>
        <div
          className={style.directionLeaders__card_pic}
          style={{
            backgroundImage: `url(${item.pic})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className={style.directionLeaders__card_textPart}>
          <h5 className={style.directionLeaders__card_name}>{item.name}</h5>

          <div className={style.directionLeaders__card_directionBox}>
            <p className={style.directionLeaders__card_directionText}>{item.direction}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DirectionLeader;
