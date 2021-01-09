import React from "react";
import { HeaderWrapper } from "./Header.styles";
import headerImage from "../../images/paul-frenzel-MnHQMzC6n-o-unsplash.jpg";

export default function Header() {
  return <HeaderWrapper id="home" imageUrl={headerImage}></HeaderWrapper>;
}
