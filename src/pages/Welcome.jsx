import React from "react";

// import { Button } from "../components/button/Button";
// import { Input } from "../components/inputs/Input";

import {Button,Input} from "../components"


export const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <h1>Добро пожаловать в квиз от лучшего учебного центра</h1>

          <form className="welcome__form">
            <Input
              label="Ваше имя"
              type="text"
              name="username"
              id="username"
              placeholder="Ваш ответ"
              required={true}
              errorMessage="Введите имя в правильном формате."
            />

            <Input
              label="  Ваш номер"
              type="tel"
              name="phone"
              id="phone"
              placeholder="+998 9- --- -- -- "
              required={true}
              pattern="^(?:\+998)?(?:\d{2})?(?:\d{7})$"
              errorMessage="Введите номер в правильном формате"
            />

            <Button text={"Далее"}/>
          </form>
        </div>
      </div>
    </div>
  );
};
