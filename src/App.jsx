import React from "react";
import "./styles/main.css";
import { Routes, Route } from "react-router-dom"
import { Welcome, StepOne, StepTwo, StepThree, StepFour, Thanks, Step } from "./pages";
// import { Indecator } from "./components/progress-bar/Indecator";
import { useEffect, useState } from "react";





export const App = () => {
  const [isDark, setIsDark] = useState(false);



  // Изменение цвета фона body при изменении состояния isDark
  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#333" : "#fff";
    document.body.style.color = isDark ? "#fff" : "#000"; // Опционально: изменение цвета текста
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);




  return (
    <>
      <nav style={{ display: 'flex', marginLeft: 'auto', width: '300px' }}>

        <button
          onClick={() => setIsDark(false)}
          style={{
            padding: "10px 20px",
            margin: "10px",
            backgroundColor: "#f0f0f0",
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        >
          Светлый режим
        </button>

        <button
          onClick={() => setIsDark(true)}
          style={{
            padding: "10px 20px",
            margin: "10px",
            backgroundColor: "#333",
            color: "#fff",
            border: "1px solid #666",
            cursor: "pointer",
          }}
        >
          Тёмный режим
        </button>


      </nav>

      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/step" element={<Step />}>
          <Route index path="1" element={<StepOne />} />
          <Route path="2" element={<StepTwo />} />
          <Route path="3" element={<StepThree />} />
          <Route path="4" element={<StepFour />} />
        </Route>

        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </>


  )
};





