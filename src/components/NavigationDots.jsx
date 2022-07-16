import React from "react";
import { useSelector } from "react-redux";

const NavigationDots = ({ active }) => {
  let style = {
    backgroundColor: "#313BAC",
  };
  const theme = useSelector((state) => state.theme);

  !theme.darkmode
    ? (style = { backgroundColor: "#313BAC" })
    : (style = { backgroundColor: "#FEC260" });

  return (
    <div className='app__navigation'>
      {["home", "about", "work", "skills", "testimonial", "contact"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className='app__navigation-dot'
            style={active === item ? style : {}}
          >

          </a>
        )
      )}
    </div>
  );
};

export default NavigationDots;
