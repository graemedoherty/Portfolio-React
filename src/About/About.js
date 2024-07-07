import React from 'react';
import Typed from './Typed';
import './about.css';
import CoderAnimation from '../animations/CoderAnimation';

const About = () => {
  return (
    <div className='About-Section'>
      <div className='Typed-Wrapper'>
        <Typed />
      </div>
      <div className='CoderAnimation-Wrapper'>
        <CoderAnimation />
      </div>
    </div>
  );
};

export default About;
