import React from 'react';
import data01 from "../../../assets/images/franchise/franchise-business-model-01.png";
import franchiseCheck from "../../../assets/images/franchise/franchise-check.png";

// import data02 from "../../../assets/images/franchise/franchise-business-model-02.png";
// import data03 from "../../../assets/images/franchise/franchise-business-model-03.png";
// import data04 from "../../../assets/images/franchise/franchise-business-model-04.png";


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
              <li className="business-models__card-item">20 ft mobile container</li>
              <li className="business-models__card-item">Movable unit</li>
              <li className="business-models__card-item">Quick service model</li>
              <li className="business-models__card-item">High-traffic locations</li>
              <li className="business-models__card-item">Lower investment</li>
            </ul>
          </div>
        </div>
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
              <li className="business-models__card-item">20 ft mobile container</li>
              <li className="business-models__card-item">Movable unit</li>
              <li className="business-models__card-item">Quick service model</li>
              <li className="business-models__card-item">High-traffic locations</li>
              <li className="business-models__card-item">Lower investment</li>
            </ul>
          </div>
        </div>
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
              <li className="business-models__card-item">20 ft mobile container</li>
              <li className="business-models__card-item">Movable unit</li>
              <li className="business-models__card-item">Quick service model</li>
              <li className="business-models__card-item">High-traffic locations</li>
              <li className="business-models__card-item">Lower investment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
