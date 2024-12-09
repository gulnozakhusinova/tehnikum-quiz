import React, { useState } from "react";
import { Title, Button, Indecator } from "../components";
import { useNavigate } from "react-router-dom";
import { ArrowBack, ThreeDRotation } from '@mui/icons-material';

export const StepFour = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track selected option

  // Handle change in radio button selection
  const handleOptionChange = (event) => {
    setSelectedAnswer(event.target.value); // Update the selected answer
  };

  // Handle the click on the "Далее" button
  const handleNextClick = () => {
    if (selectedAnswer) {
      navigate('/thanks'); // Navigate to the next step (step 5)
    }
  };

  const nextClick = () => {
    navigate('/step/3');
  }

  return (
    <div className="container">
       <div className="iconBtn" onClick={nextClick} >
        <ArrowBack />
      </div>
      <div className="wrapper">
        <Indecator steps={4} activeStep={4} />
        <div className="emoji-quiz">
          <div className="question">
            <Title text={"4. Занимательный вопрос"} />
            <ul className="level-variants">
              {/* List of options */}
              {[1, 2, 3, 4, 5].map((value) => (
                <li className="variant-wrapper" key={value}>
                  <input
                    required
                    type="radio"
                    name="variant"
                    id={`variant-${value}`}
                    value={value}
                    checked={selectedAnswer === `${value}`} // Check if this option is selected
                    onChange={handleOptionChange} // Handle option change
                  />
                  <label htmlFor={`variant-${value}`}>{value}</label>
                </li>
              ))}
            </ul>
            {/* Button will be enabled only if an option is selected */}
            <Button text={"Далее"} disabled={!selectedAnswer} onClick={handleNextClick} />
          </div>
        </div>
      </div>
    </div>
  );
};


