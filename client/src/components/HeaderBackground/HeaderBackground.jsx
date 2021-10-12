import image1 from "../../public/img/slide-1.jpg";
import image2 from "../../public/img/slide-2.jpg";
import image3 from "../../public/img/slide-3.jpg";
import BackgroundSlider from "react-background-slider";

function HeaderBackground() {
  return (
    <>
      <BackgroundSlider
        images={[image1, image2, image3]}
        duration={7}
        transition={2}
      />
    </>
  );
}
export default HeaderBackground;
