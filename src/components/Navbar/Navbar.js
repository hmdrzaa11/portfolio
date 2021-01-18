import React, { useEffect, useState } from "react";
import { Nav } from "./Navbar.styles";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import DarkMode from "../DarkMode/DarkMode";
import { CSSTransition } from "react-transition-group";
const sections = ["about", "portfolio", "contact"];

let Navbar = () => {
  let [startAnimate, setStartAnimate] = useState(false);
  let [toggleHamburger, setToggleHamburger] = useState(false);
  let handleNavClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setToggleHamburger(false);
  };
  useEffect(() => {
    setStartAnimate(true);
  }, []);

  let renderNavSections = sections.map((sec) => (
    <CSSTransition
      key={sec}
      in={startAnimate}
      timeout={1000}
      classNames="fade"
      mountOnEnter
    >
      <li onClick={() => handleNavClick(sec)}>{sec}</li>
    </CSSTransition>
  ));

  let handleToggleClick = () => {
    setToggleHamburger(!toggleHamburger);
  };

  return (
    <Nav open={toggleHamburger}>
      <ul>
        {renderNavSections}
        <DarkMode />
      </ul>
      <BurgerMenu open={toggleHamburger} handleClick={handleToggleClick} />
    </Nav>
  );
};

export default Navbar;
