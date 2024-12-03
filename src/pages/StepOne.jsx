import React from "react";
import { Title, Button, Indecator } from "../components"

export const StepOne = () => {
  return (
    <div className="container">
      <div className="wrapper">
      <Indecator steps={1} activeStep={1} />
        <div className="single-input-quiz">
          <div className="question">
            <Title text={"1. Занимательный вопрос"} />
            <label className="input-wrapper">
              <input
                required
                type="text"
                name="answer"
                placeholder="Ваш ответ"
              />
              <span id="error-message">
                Введите номер в правильном формате например
              </span>
            </label>
            <Button text={"Далее"} />
          </div>
        </div>
      </div>
    </div>
  );
};
