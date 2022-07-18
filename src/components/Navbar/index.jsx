import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import { Toggle } from "../../components";

import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const theme = useSelector((state) => state.theme);

  


  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        {!theme.darkmode ? (
          <img src={images.logowhite} alt='logo' />
        ) : (
          <img src={images.logodark} alt='logo' />
        )}
      </div>
      <ul className='app__navbar-links'>
        {["home", "about", "work", "skills", "testimonial", "contact"].map(
          (item) => (
            <li className='app__flex p-text' key={`link-${item}`}>
              <div />

              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
      </ul>
      <div className='app__navbar-toggle'>
        <Toggle />
      </div>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [90, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {[
                "home",
                "about",
                "work",
                "skills",
                "testimonial",
                "contact",
              ].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
