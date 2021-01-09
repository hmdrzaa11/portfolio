import React from "react";
import { HeaderWrapper } from "./Header.styles";
import headerImage from "../../images/header.jpg";

export default function Header() {
  return <HeaderWrapper id="home" imageUrl={headerImage}></HeaderWrapper>;
}
