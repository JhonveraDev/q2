import React from 'react';
import { Button } from '../../../ui/components/Button';

export const HeroFranchise = () => {
  return (
    <div className='hero-franchise'>
      <h1>Create Something Bigger with Qargo Coffee</h1>
      <p>Join the country’s fastest-growing coffee franchise and build a thriving business with Italy’s premium coffee, fine pastries, a unique proven system, and unmatched support.</p>
      <div className="franchise-buttons">
        <Button text='Start the Conversation' className='hero-button__franchise' />
        <Button text='Download Our Franchise Info' className='hero-button__franchise' />
      </div>
    </div>
  )
}
