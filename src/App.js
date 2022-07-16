import React, { useState, createContext } from "react";
import { useSelector } from "react-redux";
 
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";

import "./App.scss";

const App = () => {

  let themeid = "light";
  const theme = useSelector((state) => state.theme);
  {!theme.darkmode ? themeid = "light" : themeid = "dark"}


  return (
    <div className='app' id={themeid}>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
