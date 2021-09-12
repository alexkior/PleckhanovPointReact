import DirectionLeader from "../DirectionLeader/DirectionLeader";

function DirectionLeaders(params) {
  return (
    <section class="main__section direction-leaders">
      <div class="main__title-box">
        <h3 class="main__title">Лидеры направлений:</h3>

        <div class="main__title-icon"></div>
      </div>

      <div class="direction-leaders__content">
        <DirectionLeader />

        <DirectionLeader />

        <DirectionLeader />

        <DirectionLeader />

        <DirectionLeader />

        <DirectionLeader />
      </div>
    </section>
  );
}

export default DirectionLeaders;
