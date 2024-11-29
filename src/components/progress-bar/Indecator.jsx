import React from 'react'
import classNames from "classnames";


export const Indecator = ({ steps, activeStep }) => {

  const indecator = (100 / steps) * (activeStep - 1) + "%"

  return (
    <div className="indicator">
      <div className="indicator__text">
        <span className="indicator__description">Прогресс прохождения:</span>
        <span className="indicator__value">
          {indecator}
        </span>
      </div>
      <div className="indicator__progressbar">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className={classNames({
                indicator__unit: true,
                [`indicator__unit-${index + 1}`]: true,
                _active: index < activeStep,
                _current : index === activeStep - 1
              })}

            // {
            //   "indicator__unit--active": index < activeStep,
            //   "indicator__unit--current": index === activeStep - 1,
            // }

            />
          ))}
      </div>
    </div>
  );
};


