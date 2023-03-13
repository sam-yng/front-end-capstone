import React from "react";
import Specials from "../components/Specials";
import Header from "../components/Header";
import Testimonials from "../components/Testimonials"
import About from "../components/About";
import '../css/index.css'

const Main = () => {
  return (
    <>
      <Header />
      <Specials />
      <Testimonials />
      <About />
    </>
  );
}

export default Main;