import React from "react";
import { Indecator } from "../components";

export const Thanks = () => {
  return (
    <div className="container">
      <div className="wrapper">
      <Indecator steps={5} activeStep={5} />
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />
          <h1>Спасибо за прохождение опроса!</h1>
          <p>Получи свою скидку по ссылке ниже или другое блаблабла</p>
          <button type="button" id="get-link">
            Получить ссылку
          </button>
        </div>
      </div>
    </div>
  );
}