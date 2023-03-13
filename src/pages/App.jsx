import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Specials from "../components/Specials";
import Header from "../components/Header";
import Testimonials from "../components/Testimonials"
import About from "../components/About";
import '../css/index.css'

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default App;