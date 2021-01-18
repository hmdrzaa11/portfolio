import React, { useContext } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import { darkModeContext } from "./context/darkModeContext";
import { AppWrapper } from "./App.styles";

import AboutSection from "./components/AboutSection/AboutSection";
export default function App() {
  let darkMode = useContext(darkModeContext);
  return (
    <AppWrapper dark={darkMode.darkMode}>
      <Navbar />
      <Header />
      <AboutSection />
      <Portfolio />
      <ScrollTop />
      <Footer />
    </AppWrapper>
  );
}
