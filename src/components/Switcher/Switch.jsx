import React, { useState, useEffect } from 'react';
import "./Switch.css"

export const Switch = () => {

  const [isNightMode, setIsNightMode] = useState(() => {
    
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark'; 
  });

  useEffect(() => {
    document.body.style.backgroundColor = isNightMode ? "#333" : "#fff";
    document.body.style.color = isNightMode ? "#fff" : "#000"; 
    document.body.style.color = isNightMode ? "#fff" : "#000"; 
    localStorage.setItem('theme', isNightMode ? 'dark' : 'light');
  }, [isNightMode]); 
 
  useEffect(() => {
    if (isNightMode) {
      document.body.classList.add('night');
    } else {
      document.body.classList.remove('night');
    }

    localStorage.setItem('theme', isNightMode ? 'dark' : 'light');
  }, [isNightMode]);


  const titleColor = isNightMode ? "#fff" : "#000";
  const inputBackgroundColor = isNightMode ? "#555" : "#ccc";

  return (
    <div className="container">
      <label className="switch">
        <input 
          type="checkbox" 
          id="toggleSwitch" 
          checked={isNightMode} 
          onChange={() => setIsNightMode(!isNightMode)} 
        />
        <div className="slider">
          <div className="sun"></div>
          <div className="moon"></div>
          <div className="cloud cloud1"></div>
          <div className="cloud cloud2"></div>
          <div className="star star1"></div>
          <div className="star star2"></div>
          <div className="star star3"></div>
          <div className="star star4"></div>
          <div className="star star5"></div>
        </div>
      </label>
     
    </div>
  );
};


