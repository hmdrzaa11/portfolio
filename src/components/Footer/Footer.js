import React, { useContext } from "react";
import { darkModeContext } from "../../context/darkModeContext";
import {
  FooterWrapper,
  Email,
  FooterNav,
  FooterNavItem,
  FooterNavLink,
  Copyright,
} from "./Footer.styles";

const FooterNavIcons = [
  {
    icon: "fab fa-github",
    href: "https://github.com/hmdrzaa11",
    iconColor: "#4078c0",
  },
  {
    icon: "fab fa-instagram",
    href: "https://www.instagram.com/hmdrzadev/",
    iconColor: "#bc2a8d",
  },
  {
    icon: "fab fa-linkedin-in",
    href: "https://www.linkedin.com/in/hmdrza11/",
    iconColor: "#0e76a8",
  },
];

export default function Footer() {
  let darkMode = useContext(darkModeContext);
  let renderFooterNav = FooterNavIcons.map((icon) => (
    <FooterNavItem key={icon.icon}>
      <FooterNavLink
        dark={darkMode.darkMode}
        href={icon.href}
        target="_blank"
        iconColor={icon.iconColor}
      >
        <i className={icon.icon} />
      </FooterNavLink>
    </FooterNavItem>
  ));
  return (
    <FooterWrapper id="contact" dark={darkMode.darkMode}>
      <h3>Contact Me</h3>
      <div className="text-wrapper">
        <p className="footer-detail">
          Feel free to reach out if you’re in need of a Developer. Whether that
          means you need a website, web app, or you’re looking to fill a
          full-time position. I’m always open to a conversation
        </p>
      </div>
      <Email href="mailto:hmdrzadev@gmail.com">hmdrzadev@gmail.com</Email>
      <FooterNav>{renderFooterNav}</FooterNav>
      <Copyright>&copy;Oujand,2020</Copyright>
    </FooterWrapper>
  );
}
