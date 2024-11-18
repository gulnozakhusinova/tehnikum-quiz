import React from "react";
// import Welcome from "./pages/Welcome";
import "./styles/main.css";
// import StepOne from "./pages/StepOne";
// import Step2 from "./pages/StepTwo"
import { Welcome,StepOne,StepTwo,StepThree,StepFour,Thanks } from "./pages";

export const App = () => {
  return (
    <div className="App">
      <Welcome /> 
       <StepOne/>
      <StepTwo/>
      <StepThree/>
      <StepFour/>
      <Thanks/>
    </div>
  );
};
