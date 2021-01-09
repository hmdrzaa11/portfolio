import React from "react";
import { Paragraph } from "../../styles/GlobalStyles";
import {
  FooterHeader,
  FooterWrapper,
  Email,
  FooterNav,
  FooterNavItem,
  FooterNavLink,
  Copyright,
} from "./Footer.styles";

const FooterNavIcons = [
  { icon: "fab fa-github", href: "https://github.com/hmdrzaa11" },
  { icon: "fab fa-instagram", href: "https://www.instagram.com/hmdrzadev/" },
  { icon: "fab fa-linkedin-in", href: "https://www.linkedin.com/in/hmdrza11/" },
];

export default function Footer() {
  let renderFooterNav = FooterNavIcons.map((icon) => (
    <FooterNavItem key={icon.icon}>
      <FooterNavLink href={icon.href} target="_blank">
        <i className={icon.icon} />
      </FooterNavLink>
    </FooterNavItem>
  ));
  return (
    <FooterWrapper id="contact">
      <FooterHeader>Contact Me</FooterHeader>
      <Paragraph>If you want to talk, you can find me at:</Paragraph>
      <Email href="mailto:hmdrzadev@gmail.com">hmdrzadev@gmail.com</Email>
      <FooterNav>{renderFooterNav}</FooterNav>
      <Copyright>&copy;Oujand,2020</Copyright>
    </FooterWrapper>
  );
}
