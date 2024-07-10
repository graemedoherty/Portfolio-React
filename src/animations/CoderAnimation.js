import React from 'react';
import Lottie from 'lottie-react';
// import animationData from './computer.json';
import animation from './coderAnimation.json';

function CoderAnimation() {
  return (
    <div className='animation-container'>
      <Lottie
        animationData={animation}
        loop={true}
        style={{ height: '600px', width: '600px' }} // Adjusted size
      />
    </div>
  );
}

export default CoderAnimation;
