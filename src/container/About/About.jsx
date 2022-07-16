import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./About.scss";

const About = () => {
  const [abouts, setAbouts] = useState([]);
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);
  return (
    <>
      <h2 className='head-text'>
        I know that <span>Good Code</span>
        <br />
        means <span>Good Business</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.7, type: "tween" }}
            className='app__profile-item'
            key={about.title + index}
          >
            {!theme.darkmode ? (
              <img src={urlFor(about.imgUrl).url()} alt={about.title} />
            ) : (
              <img src={urlFor(about.imgUrlNight).url()} alt={about.title} />
            )}
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};
export default AppWrap(About, "about");
