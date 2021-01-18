import React, { useContext } from "react";
import { darkModeContext } from "../../context/darkModeContext";
import { DarkModeWrapper } from "./DarkMode.styles";

export default function DarkMode() {
  let contextData = useContext(darkModeContext);
  return (
    <DarkModeWrapper>
      <input
        type="checkbox"
        id="darkMode"
        value={contextData.darkMode}
        onClick={() => contextData.toggleDarkMode()}
      />
      <label htmlFor="darkMode" />
    </DarkModeWrapper>
  );
}
