import React from "react";
import { Burger } from "./BurgerMenu.styles";

export default function BurgerMenu(props) {
  return (
    <Burger onClick={props.handleClick} open={props.open}>
      <div />
      <div />
      <div />
    </Burger>
  );
}
