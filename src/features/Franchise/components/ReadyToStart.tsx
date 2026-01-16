import React from 'react'
import { Button } from '../../../ui/components/Button'

export const ReadyToStart = () => {
  return (
    <div className='ready-to-start'>
      <h2 className="business-models__title">
        Ready to Start Your Qargo ownership?
      </h2>
      <p className="business-models__description" style={{ color: '#003465' }}>
        Join the Qargo Coffee family and build a business supported by a proven franchise platform. Our franchise development team is ready to guide you through the first steps toward ownership.
      </p>
      <div className="ready-to-start-buttons">
        <Button text='Contact Us Now' className='hero-button__franchise' />
        <Button text='Schedule a Call' className='hero-button__franchise' />
      </div>
    </div>
  )
}
