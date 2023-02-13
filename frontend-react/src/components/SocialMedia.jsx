import React from 'react';
import { BsLinkedin, BsStackOverflow, BsYoutube } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://www.linkedin.com/in/wafa-oueslati-5bb462151/' target="_blank" rel='noreferrer'> <BsLinkedin /> </a>
    </div>
    <div>
     <a href='https://github.com/Oueslati-Waafa' target="_blank" rel='noreferrer'><FaGithub /></a>
    </div>
    <div>
    <a href='https://stackoverflow.com/users/16373015/waafa-oueslati' target="_blank" rel='noreferrer'><BsStackOverflow /> </a>
    </div>
    <div>
    <a href='https://www.youtube.com/@jsgeek5248' target="_blank" rel='noreferrer'><BsYoutube /></a>
    </div>
  </div>
);

export default SocialMedia;