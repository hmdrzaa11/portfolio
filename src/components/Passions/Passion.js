import React, { useContext } from "react";
import { PassionWrapper } from "./Passion.styles";
import { darkModeContext } from "../../context/darkModeContext";
const passions = [
  {
    name: "Learning",
    icon: "fas fa-book-open",
  },
  {
    name: "Technology",
    icon: "fas fa-laptop",
  },
  {
    name: "Fitness",
    icon: "fas fa-dumbbell",
  },
];

export default function Passion() {
  let darkMode = useContext(darkModeContext);
  let renderPassions = passions.map((passion) => (
    <li key={passion.name} className="passion-list-item">
      <i className={passion.icon} /> <span>{passion.name}</span>
    </li>
  ));
  return (
    <PassionWrapper dark={darkMode.darkMode}>
      <div className="container">
        <div className="passion">
          <h1 className="heading">Passions</h1>
          <div className="passion-container">
            <ul className="passion-list">{renderPassions}</ul>
          </div>
        </div>
        <div className="languages">
          <h1 className="heading">Languages</h1>
          <div className="language-section">
            <div className="language-detail">
              <h4 className="language-title">English</h4>
              <h5 className="language-subtitle">Fluent</h5>
            </div>
            <div className="progress">
              <div className="progress-bar" />
            </div>
          </div>
        </div>
      </div>
    </PassionWrapper>
  );
}
