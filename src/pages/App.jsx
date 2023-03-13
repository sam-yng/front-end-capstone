import React from "react";
import Main from "../components/Main";
import '../css/index.css'
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Reservations from "./Reservations";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/Reservations' element={<Reservations />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;