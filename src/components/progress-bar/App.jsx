import React, { useState, useEffect } from "react";
import Indicator from "..progress-bar/Indecator";

export function App() {
  const [progress, setProgress] = useState(0); // Progress from 0 to 4

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const scrollTop = document.documentElement.scrollTop; // How far user has scrolled
      const scrollHeight = document.documentElement.scrollHeight; // Total height of the document
      const clientHeight = document.documentElement.clientHeight; // Visible part of the screen

      const totalScrollable = scrollHeight - clientHeight;
      const scrollPercentage = scrollTop / totalScrollable;

      // Map scroll percentage to progress (0-4)
      const newProgress = Math.min(Math.floor(scrollPercentage * 4) + 1, 4);
      setProgress(newProgress);
    };

    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);

    // Clean up listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "200vh", padding: "20px" }}>
      {/* Render the progress bar */}
      <Indicator
        description="Скидка за прохождение опроса"
        discount={progress * 5}
        progress={progress}
      />
      <div style={{ marginTop: "20px", fontSize: "18px", color: "#555" }}>
        Прокрутите вниз, чтобы увеличить прогресс!
      </div>
    </div>
  );
}

