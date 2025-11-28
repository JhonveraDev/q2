import heroMainImage from "../../../assets/images/home/hero-home-image.png";
import heroElementFloating01 from "../../../assets/images/home/hero-home-image-element-01.png";
import heroElementFloating02 from "../../../assets/images/home/hero-home-image-element-02.png";
import heroElementFloating03 from "../../../assets/images/home/hero-home-image-element-03.png";
import heroElementFloating04 from "../../../assets/images/home/hero-home-image-element-04.png";
import heroElementFloating05 from "../../../assets/images/home/hero-home-image-element-05.png";
import { Button } from "../../../ui/components/Button";

export const HeroHome = () => {
  return (
    <>
      <div className="hero-home">
        <div className="mid-bg"></div>
        <div className="hero-text">
          <h1>Once upon a fall</h1>
          <p>Step into a season of flavor and fantasy. We’ve combined fall favorites like pumpkin spice, matcha, apple, chai, and more to create a lineup of drinks inspired by iconic fairy tales.</p>
        </div>
        <div className="hero-image">
          <img src={heroMainImage} alt="" className="main-hero-image"/>
          <img src={heroElementFloating01} alt="element floating" className="hero-e1" />
          <img src={heroElementFloating02} alt="element floating" className="hero-e2" />
          <img src={heroElementFloating03} alt="element floating" className="hero-e3" />
          <img src={heroElementFloating04} alt="element floating" className="hero-e4" />
          <img src={heroElementFloating05} alt="element floating" className="hero-e5" />
        </div>
      </div>

      <div className="hero-buttons">
        <Button text={'Order now'} />
        <Button text={'Find a store'} />
      </div>
    </>
  )
}