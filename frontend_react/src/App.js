import React, { useState, createContext } from "react";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";

import "./App.scss";

export const ThemeContext = createContext(null);

const toggleTheme = () => {
  setTheme((curr) => (curr === "light" ? "dark" : "light"));
};

const App = () => {
  return (
    <div className='app' id={theme}>
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
