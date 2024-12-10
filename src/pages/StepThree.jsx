import React, { useState } from "react";
import { Title, Button, Indecator } from "../components";
import { useNavigate } from "react-router-dom";
import { ArrowBack, ThreeDRotation } from '@mui/icons-material';

export const StepThree = () => {
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track selected option

  const handleOptionChange = (event) => {
    setSelectedAnswer(event.target.value); // Set the selected answer
  };

  const handleNextClick = () => {
    if (selectedAnswer) {
      navigate('/step/4'); // Navigate to next step (step 4)
    }
  };

  const nextClick = () => {
    navigate('/step/2');
  }

  return (
    <div className="container">
        <div className="iconBtn" onClick={nextClick} >
        <ArrowBack />
      </div>
      <div className="wrapper">
        <Indecator steps={3} activeStep={3} />
        <div className="emoji-quiz">
          <div className="question">
            <Title text={"3. Выберите подходящий к вам характер."} />
            <ul className="emoji-variants">
              <li className="variant-wrapper">
                <input
                  required
                  type="radio"
                  name="variant"
                  id="variant-1"
                  value="1"
                  checked={selectedAnswer === "1"}
                  onChange={handleOptionChange}
                />
                <label htmlFor="variant-1">
                  <img src="/img/laugh.png" alt="laugh" />
                  <p>Веселый</p>
                </label>
              </li>
              <li className="variant-wrapper">
                <input
                  required
                  type="radio"
                  name="variant"
                  id="variant-2"
                  value="2"
                  checked={selectedAnswer === "2"}
                  onChange={handleOptionChange}
                />
                <label htmlFor="variant-2">
                  <img src="/img/hearts.png" alt="hearts" />
                  <p>Трудолюбивый</p>
                </label>
              </li>
              <li className="variant-wrapper">
                <input
                  required
                  type="radio"
                  name="variant"
                  id="variant-3"
                  value="3"
                  checked={selectedAnswer === "3"}
                  onChange={handleOptionChange}
                />
                <label htmlFor="variant-3">
                  <img src="/img/smirk.png" alt="smirk" />
                  <p>Серьезный</p>
                </label>
              </li>
              <li className="variant-wrapper">
                <input
                  required
                  type="radio"
                  name="variant"
                  id="variant-4"
                  value="4"
                  checked={selectedAnswer === "4"}
                  onChange={handleOptionChange}
                />
                <label htmlFor="variant-4">
                  <img src="/img/fright.png" alt="fright" />
                  <p>Любопытный</p>
                </label>
              </li>
            </ul>
            {/* Button is enabled only if an option is selected */}
            <Button text={"Далее"} disabled={!selectedAnswer} onClick={handleNextClick} />
          </div>
        </div>
      </div>
    </div>
  );
};



