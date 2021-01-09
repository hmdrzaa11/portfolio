import React, { useState } from "react";
import { HamburgerMenu, Nav, NavItem, NavList, Sidebar } from "./Navbar.styles";

let Navbar = () => {
  let handleNavClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  let [toggleHamburger, setToggleHamburger] = useState(false);
  let toggleSideDrawer = () => setToggleHamburger(!toggleHamburger);
  return (
    <Nav>
      <HamburgerMenu
        onClick={toggleSideDrawer}
        className={toggleHamburger ? "fa fa-times" : "fa fa-bars"}
      />
      <Sidebar show={toggleHamburger}>
        <HamburgerMenu onClick={toggleSideDrawer} className={"fa fa-times"} />
        wolf
      </Sidebar>
      <NavList>
        <NavItem onClick={() => handleNavClick("about")}>About</NavItem>
        <NavItem onClick={() => handleNavClick("portfolio")}>Portfolio</NavItem>
        <NavItem onClick={() => handleNavClick("contact")}>Contact</NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
