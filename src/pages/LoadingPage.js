import React from "react";
import SpinnerWhite from "../assets/spinner-white.gif";
import SpinnerBlack from "../assets/spinner-black.gif";
import { ThemeConsumer } from "../contexts/ThemeContext";

function LoadingPage() {
  return (
    <ThemeConsumer>
      {({ theme }) => {
        return (
          <div className="loading-page">
            {theme === "dark" ? (
              <img src={SpinnerWhite} alt="spinner-black" />
            ) : (
              <img src={SpinnerBlack} alt="spinner-white" />
            )}
          </div>
        );
      }}
    </ThemeConsumer>
  );
}

export default LoadingPage;
