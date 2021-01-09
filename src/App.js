import React from "react";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import ScrollTop from "./components/ScrollTop/ScrollTop";

export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <ScrollTop />
      <Footer />
    </div>
  );
}
