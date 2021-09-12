import FieldCard from "../FieldCard/FieldCard";

function FieldCards(params) {
  return (
    <section class="main__section field-cards">
    <div class="main__title-box">
      <h3 class="main__title">Активных мероприятий на платформе:</h3>

      <div class="main__title-icon"></div>
    </div>

    <div class="field-cards__content">
        <FieldCard />
        
        <FieldCard />

        <FieldCard />

        <FieldCard />

        <FieldCard />

        <FieldCard />
    </div>
  </section>
  );
}

export default FieldCards;
