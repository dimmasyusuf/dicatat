import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { ThemeConsumer } from "../contexts/ThemeContext";

function ToggleTheme() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => {
        return (
          <div className="navbar-theme">
            <button className="navbar-theme__button" onClick={toggleTheme}>
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </button>
          </div>
        );
      }}
    </ThemeConsumer>
  );
}

export default ToggleTheme;
