import React, { useState } from "react";
import { Button, Title, Option, Indecator } from "../components";
import { useNavigate } from "react-router-dom";
import { ArrowBack, ThreeDRotation } from '@mui/icons-material';




export const StepTwo = () => {
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState(null); // State to track selected answer

  const answers = [
    {
      id: '8f5ced48-da99-477f-aa62-889eca67ce57',
      answer: 'Ваш ответ 11'
    },
    {
      id: '4639c91d-0dc1-4b31-a7a4-b5b66d7584d3',
      answer: 'Ваш ответ 22'
    },
    {
      id: 'bdc14d39-df17-402c-a332-5037ee1c7e35',
      answer: 'Ваш ответ 33'
    },
    {
      id: '4c40902d-bc82-479c-a690-0386c8811ad8',
      answer: 'Ваш ответ 44'
    }
  ];

  // Handle option selection
  const handleOptionSelect = (id) => {
    setSelectedAnswer(id);
  };

  // Handle button click to navigate to next step
  const handleNextClick = () => {
    if (selectedAnswer) {
      navigate('/step/3');
    }
  }

  const nextClick = () => {
    navigate('/step/1');
  }

  return (
    <div className="container">
      <div className="iconBtn" onClick={nextClick} >
        <ArrowBack />
      </div>
      <div className="wrapper">
        <Indecator steps={2} activeStep={2} />
        <div className="variants-quiz">
          <div className="question">
            <Title text={"2. Занимательный вопрос"} />
            <ul className="variants">
              {answers.map(({ id, answer }) => (
                <Option
                  key={id}
                  id={id}
                  answer={answer}
                  isSelected={id === selectedAnswer} // Determine if this option is selected
                  onSelect={handleOptionSelect} // Pass selection handler
                />
              ))}
            </ul>
            {/* Button is enabled only if an option is selected */}
            <Button
              text={"Далее"}
              disabled={!selectedAnswer}
              onClick={handleNextClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};



