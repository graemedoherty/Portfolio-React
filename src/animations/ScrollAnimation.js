import React, { useContext } from 'react';
import Lottie from 'lottie-react';
import scroll from './scroll.json';
import scrollDark from './scrollDark.json';
import { ThemeContext } from '../Components/ThemeSelector/ThemeContext';

const ScrollAnimation = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className='scroll-down'>
      <Lottie
        animationData={theme.name === 'Dark' ? scrollDark : scroll}
        loop={true}
        style={{ height: '100px', width: '100px' }}
      />
    </div>
  );
};

export default ScrollAnimation;
