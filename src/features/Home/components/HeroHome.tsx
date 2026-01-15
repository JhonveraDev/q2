import heroMainImage from "../../../assets/images/home/hero-home-image.png";
import { Button } from "../../../ui/components/Button";

export const HeroHome = () => {
  return (
    <>
      <div className="hero-home-container">
        <div className="mid-bg"></div>
        <div className="hero-text">
          <h1>Keepers of Winter</h1>
          <p>The enchanted elves gather magical ingredients like gingerbread, chocolate, pistachio, matcha, and more to bring warmth to your winter days</p>
        </div>
        <div className="hero-image">
          <img src={heroMainImage} alt="" className="main-hero-image" />
        </div>
      </div>

      <div className="hero-buttons">
        <Button text='Order now' className='hero-button'/>
        <Button text='Find a store' className='hero-button'/>
      </div>
    </>
  )
}