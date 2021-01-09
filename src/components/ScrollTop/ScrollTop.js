import React, { useEffect, useState } from "react";
import { ScrollButton } from "./ScrollTop.styles";

export default function ScrollTop() {
  let [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      let scrollPosition = Math.floor(window.scrollY);
      if (scrollPosition >= 700) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);
  let scrollToTop = () => {
    document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <ScrollButton show={show} onClick={scrollToTop}>
        <i className="fas fa-angle-double-up"></i>
      </ScrollButton>
    </div>
  );
}
