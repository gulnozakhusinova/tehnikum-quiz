import React from "react";
import "./styles/main.css";
import { Routes, Route } from "react-router-dom"
import { Welcome, StepOne, StepTwo, StepThree, StepFour, Thanks, Step } from "./pages";
import { useEffect, useState } from "react";
import { Switch } from "./components";






export const App = () => {


  return (
    <>
      <nav style={{ display: 'flex', marginLeft: 'auto', width: '300px' }}>
        <Switch />
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





