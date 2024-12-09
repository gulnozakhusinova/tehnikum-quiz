import React from "react";
import { Indecator } from "../components";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowBack, ThreeDRotation } from '@mui/icons-material';


export const Thanks = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  };
  const nextClick = () => {
    navigate('/step/1');
  }

  return (
    <div className="container">
          <div className="iconBtn" onClick={nextClick} >
        <ArrowBack />
      </div>
      <div className="wrapper">
        <Indecator steps={5} activeStep={5} />
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />
          <h1>Спасибо за прохождение опроса!</h1>
          <p>Получи свою скидку по ссылке ниже или другое блаблабла</p>
          <button type="button" id="get-link" onClick={toggleVisibility}>
            Получить ссылку
          </button>

          <div className="linkcontainer" style={{ display: isVisible ? 'block' : 'none', margin: "20px", paddingLeft: "90px", color: "red" }}>
            <a href="  https://www.apple.com/uz/"><strong>Твоя ссылка</strong></a>
          </div>
        </div>
      </div>
    </div>
  );
}