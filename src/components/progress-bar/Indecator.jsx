import React from 'react'

export const Indecator = ({ description, discount, progress }) => {
    return (
    <div className="indicator">
      <div className="indicator__text">
        <span className="indicator__description">{description}:</span>
        <span className="indicator__value">{discount}%</span>
      </div>
      <div className="indicator__progressbar">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`indicator__unit ${
              index < progress ? "indicator__unit--active" : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
   
  
}
