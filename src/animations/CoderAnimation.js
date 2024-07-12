import React, { useContext } from 'react';
import Lottie from 'lottie-react';
// import animationData from './computer.json';
import animation from './coderAnimation.json';
import animationDark from './coderAnimation-dark.json';
import { ThemeContext } from '../Components/ThemeSelector/ThemeContext';

function CoderAnimation() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className='animation-container'>
      <Lottie
        animationData={theme.name === 'Dark' ? animationDark : animation}
        loop={true}
        style={{ height: '600px', width: '600px' }} // Adjusted size
      />
    </div>
  );
}

export default CoderAnimation;
