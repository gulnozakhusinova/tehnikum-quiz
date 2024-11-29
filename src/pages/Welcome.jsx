import { useState } from "react";
import { Button, Input } from "../components"
import { useNavigate } from "react-router";


export const Welcome = () => {
  const navigate = useNavigate();

  const [isDisabled, setIsDisabled] = useState(true);
  const [phone, setPhone] = useState('');

  // Обработчик для ввода имени
  const onNameInputHandler = (e) => {
    const value = e.target.value.trim();
    setIsDisabled(value.length < 3);
  };

  // Обработчик для ввода телефона
  const onPhoneInputHandler = (e) => {
    const value = e.target.value.trim();
    // Регулярное выражение для проверки формата телефона
    const phonePattern = /^(?:\+998)?(?:\d{2})?(?:\d{7})$/;
    if (phonePattern.test(value)) {
      setPhone(value);
    }
  };

  // Обработчик для отправки формы
  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate('/step/1');
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <h1>Добро пожаловать в квиз от лучшего учебного центра</h1>
          <form className="welcome__form" onSubmit={onSubmitHandler}>
            <Input
              label="Ваше имя"
              type="text"
              name="username"
              id="username"
              placeholder="Ваш ответ"
              onInput={onNameInputHandler}
            />
            <Input
              label="Ваш номер"
              type="tel"
              name="phone"
              id="phone"
              placeholder="+998 9- --- -- -- "
              onInput={onPhoneInputHandler}
            />
            <Button type="submit" id="next-btn" text="Далее" disabled={isDisabled || !phone} />
          </form>
        </div>
      </div>
    </div>
  );
};


