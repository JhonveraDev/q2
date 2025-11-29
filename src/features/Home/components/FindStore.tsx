import map from '../../../assets/images/home/home-find-store-map.png'
import { Button } from '../../../ui/components/Button'

export const FindStore = () => {
  return (
    <div className="store-locator">
      <img src={map} alt="Store map" />
      <div className="store-locator__content">
        <h2>Find a store near you</h2>
        <p>Experience Italian coffee culture, local charm, and unique flavors in a warm, welcoming atmosphere.</p>
        <Button text='Explore Locations' className='store-locator__button' />
      </div>
    </div>
  )
}