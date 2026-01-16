import React from 'react'

export const CoffeeInvestment = () => {
  return (
    <div className='coffee-investment'>
      <h2 className="business-models__title">
        Qargo Coffee Investment Overview
      </h2>
      <p className="business-models__description">
        Our investment structure is designed to support long-term growth, with clear costs, scalable formats, and comprehensive support from day one.
      </p>
      <div className="coffee-investment__cards">
        <div className="coffee-investment__card">
          <h4 className="coffee-investment__title">Franchise Fee</h4>
          <p className="coffee-investment__price">$40,000 - $50,000</p>
        </div>
        <div className="coffee-investment__card">
          <h4 className="coffee-investment__title">Development Fee</h4>
          <p className="coffee-investment__price">$10,000</p>
        </div>
        <div className="coffee-investment__card">
          <h4 className="coffee-investment__title">Royalties</h4>
          <p className="coffee-investment__price">6%</p>
        </div>
        <div className="coffee-investment__card">
          <h4 className="coffee-investment__title">Marketing Fund</h4>
          <p className="coffee-investment__price">2%</p>
        </div>
      </div>
    </div>
  )
}
