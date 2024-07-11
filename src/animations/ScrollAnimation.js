import React from 'react';
import Lottie from 'lottie-react';
import scroll from './scroll.json';

const ScrollAnimation = () => {
  return (
    <div className='scroll-down'>
      <Lottie
        animationData={scroll}
        loop={true}
        style={{ height: '100px', width: '100px' }}
      />
    </div>
  );
};

export default ScrollAnimation;
