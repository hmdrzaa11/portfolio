import React, { useState } from "react";

export let darkModeContext = React.createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

let GlobalProvider = (props) => {
  let [darkMode, setDarkMode] = useState(true);
  let toggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <darkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {props.children}
    </darkModeContext.Provider>
  );
};

export default GlobalProvider;
