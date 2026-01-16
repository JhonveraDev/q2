import React from 'react';

import franchiseCheck from "../../../assets/images/franchise/franchise-check.png";
import data01 from "../../../assets/images/franchise/franchise-business-model-01.png";
import data02 from "../../../assets/images/franchise/franchise-business-model-02.png";
import data03 from "../../../assets/images/franchise/franchise-business-model-03.png";
import data04 from "../../../assets/images/franchise/franchise-business-model-04.png";


export const BusinessModels = () => {
  return (
    <div className="business-models">
      <h2 className="business-models__title">
        Our Business Models
      </h2>
      <p className="business-models__description">
        Choose from four proven Qargo Coffee franchise formats, each designed to match different markets, locations, and investment levels. However you think big, there’s a Qargo built for you!
      </p>
      <div className="business-models__cards">
        <div className="business-models__card">
          <img
            className="business-models__card-image"
            src={data01}
            alt=""
          />
          <div className="business-models__card-content">
            <h3 className="business-models__card-title">
              Mobile Container
            </h3>
            <p className="business-models__card-text">
              Compact mobile unit perfect for high-traffic locations and events
            </p>
            <ul className="business-models__card-list">
              <li className="business-models__card-item"><img src={franchiseCheck} alt="" /> 20 ft mobile container</li>
              <li className="business-models__card-item"><img src={franchiseCheck} alt="" /> Movable unit</li>
              <li className="business-models__card-item"><img src={franchiseCheck} alt="" /> Quick service model</li>
              <li className="business-models__card-item"><img src={franchiseCheck} alt="" /> High-traffic locations</li>
              <li className="business-models__card-item"><img src={franchiseCheck} alt="" /> Lower investment</li>
            </ul>
          </div>
        </div>
        <div className="business-models__card">
          <img
            className="business-models__card-image"
            src={data02}
            alt=""
          />
          <div className="business-models__card-content">
            <h3 className="business-models__card-title">
              Kiosk
            </h3>
            <p className="business-models__card-text">
              Agile, high-efficiency formats ideally suited for high-traffic locations such as shopping malls, airports, supermarkets, and food courts
            </p>
            <ul className="business-models__card-list">
              <li className="business-models__card-item"><img src={franchiseCheck} alt="" /> 190 to 800 sq ft</li>
              <li className="business-models__card-item"><img src={franchiseCheck} alt="" /> Compact footprint</li>
              <li className="business-models__card-item"><img src={franchiseCheck} alt="" /> Shared infrastructure ready</li>
              <li className="business-models__card-item"><img src={franchiseCheck} alt="" /> Full Qargo experience</li>
              <li className="business-models__card-item"><img src={franchiseCheck} alt="" /> Speed and flexibility</li>
            </ul>
          </div>
        </div>
        <div className="business-models__card">
          <img
            className="business-models__card-image"
            src={data03}
            alt=""
          />
          <div className="business-models__card-content">
            <h3 className="business-models__card-title">
              End Cap or Metro Area Stores
            </h3>
            <p className="business-models__card-text">
              Upscale interior design with premium seating and artistic atmosphere
            </p>
            <ul className="business-models__card-list">
              <li className="business-models__card-item"><img src={franchiseCheck} alt="" /> 700 to 2,500 sq ft</li>
              <li className="business-models__card-item"><img src={franchiseCheck} alt="" /> Premium interior design</li>
              <li className="business-models__card-item"><img src={franchiseCheck} alt="" /> Artisan coffee bar</li>
              <li className="business-models__card-item"><img src={franchiseCheck} alt="" /> Event space</li>
            </ul>
          </div>
        </div>
        <div className="business-models__card">
          <img
            className="business-models__card-image"
            src={data04}
            alt=""
          />
          <div className="business-models__card-content">
            <h3 className="business-models__card-title">
              Flagship Store
            </h3>
            <p className="business-models__card-text">
              Full-service coffee shop with modern architecture and outdoor seating
            </p>
            <ul className="business-models__card-list">
              <li className="business-models__card-item"><img src={franchiseCheck} alt="" /> 2500+ sq ft</li>
              <li className="business-models__card-item"><img src={franchiseCheck} alt="" /> Indoor & outdoor seating</li>
              <li className="business-models__card-item"><img src={franchiseCheck} alt="" /> Full food menu</li>
              <li className="business-models__card-item"><img src={franchiseCheck} alt="" /> Drive-thru optional</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
