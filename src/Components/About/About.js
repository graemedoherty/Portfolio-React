import React from 'react';
import Typed from './Typed';
import CoderAnimation from '../../animations/CoderAnimation';
import ScrollAnimation from '../../animations/ScrollAnimation';
import './about.css';

const About = () => {
  return (
    <div className='About-Section'>
      <div className='Typed-Wrapper'>
        <Typed />
      </div>
      <div className='Scroll-Animation'>
        <ScrollAnimation />
      </div>
      <div className='CoderAnimation-Wrapper'>
        <CoderAnimation />
      </div>
    </div>
  );
};

export default About;
