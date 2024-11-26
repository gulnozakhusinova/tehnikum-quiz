import React from "react";
import { useState, useRef, useEffect } from "react"
// import Welcome from "./pages/Welcome";
import "./styles/main.css";
// import StepOne from "./pages/StepOne";
// import Step2 from "./pages/StepTwo"
import { Welcome, StepOne, StepTwo, StepThree, StepFour, Thanks } from "./pages";
 

export const App = () => {
  const [time, setTime] = useState(new Date());

 
  useEffect(() => {
    const timerId = setInterval(() => {
      const now = new Date();
      console.log("Current Time:", now); // Log the time to the console
      setTime(now);
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timerId);

  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
    
  };



  return (
    <div style={{ fontSize: "2em", textAlign: "center", marginTop: "20px" }}>
      <h1>Current Time:</h1>
      <div>{formatTime(time)}</div>
    </div>
  );
};





