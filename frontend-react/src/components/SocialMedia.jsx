import React from 'react';
import { BsLinkedin, BsStackOverflow, BsYoutube } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsLinkedin />
    </div>
    <div>
      <FaGithub />
    </div>
    <div>
      <BsStackOverflow />
    </div>
    <div>
      <BsYoutube />
    </div>
  </div>
);

export default SocialMedia;