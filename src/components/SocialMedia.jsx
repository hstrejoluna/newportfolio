import React from "react";
import { FaFacebookF, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <FaLinkedin />
        <a className='app__anchor-social' href='https://www.linkedin.com/in/hstrejoluna/'>
          o
        </a>
      </div>
      <div>
        <FaGithub />
        <a className='app__anchor-social' href='https://github.com/hstrejoluna/'>
          o
        </a>
      </div>

      <div>
        <FaFacebookF />
        <a className='app__anchor-social' href='https://www.facebook.com/hstrejoluna/'>
          o
        </a>
      </div>
      <div>
        <FaYoutube />
        <a className='app__anchor-social' href='https://www.youtube.com/c/HSTrejoLuna'>
          o
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
