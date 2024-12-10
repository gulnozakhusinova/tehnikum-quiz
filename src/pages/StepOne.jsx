import { useState } from "react";
import { Title, Button, Indecator } from "../components";
import { useNavigate } from "react-router";

export const StepOne = () => {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState(""); // State for the input
  const [isButtonEnabled, setIsButtonEnabled] = useState(false); // State for button

  // Function to handle input change
  const handleInputChange = (event) => {
    const value = event.target.value;
    setAnswer(value);

    // If input is not empty, enable the button
    setIsButtonEnabled(value.trim() !== "");
  };

  // Function to handle form submission
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Navigate to the next step
    navigate("/step/2");
  };

  return (
    <div className="container">
      <div className="wrapper">
        <Indecator steps={1} activeStep={1} />
        <div className="single-input-quiz">
          <form onSubmit={onSubmitHandler}>
            <div className="question">
              <Title text={"1. В какой сфере учитесь или работаете?"} />
              <label className="input-wrapper">
                <input
                  required
                  type="text"
                  name="answer"
                  placeholder="Ваш ответ"
                  value={answer}
                  onChange={handleInputChange} // Handle input changes
                />
                <span id="error-message">
                  Введите номер в правильном формате например
                </span>
              </label>
            </div>
            {/* Button will be enabled if isButtonEnabled is true */}
            <Button text={"Далее"} disabled={!isButtonEnabled} />
          </form>
        </div>
      </div>
    </div>
  );
};



