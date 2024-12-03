import React from "react";
import {Title,Button,Indecator} from "../components"

export const StepFour = () => {
  return (
    <div className="container">
      <div className="wrapper">
      <Indecator steps={4} activeStep={4} />
        <div className="emoji-quiz">
          <div className="question">
          <Title text={"4. Занимательный вопрос"}/>
            <ul className="level-variants">
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-1" />
                <label htmlFor="variant-1">1</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-2" />
                <label htmlFor="variant-2">2</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-3" />
                <label htmlFor="variant-3">3</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-4" />
                <label htmlFor="variant-4">4</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-5" />
                <label htmlFor="variant-5">5</label>
              </li>
            </ul>
            <Button text={"Далее"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

