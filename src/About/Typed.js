import React, { useState, useEffect } from 'react';
import { ReactTyped } from 'react-typed';
import './about.css'; // Import the CSS file

const Typed = () => {
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowSecond(true);
    }, 3000); // Wait for 3 seconds before showing the second typed component

    const timer2 = setTimeout(() => {
      setShowThird(true);
    }, 7000); // Start typing the third string after the same delay as showSecond

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className='typed-container'>
      <div className='typed-group'>
        <ReactTyped
          strings={['Hello, my name is Graeme 👋']}
          typeSpeed={50}
          showCursor={false}
          className='typed-text'
        />
        {showSecond && (
          <ReactTyped
            strings={['I am a <b>Software Engineer</b>']}
            typeSpeed={50}
            showCursor={false}
            className='typed-text'
            startDelay={2000} // Start typing the second string after a delay
          />
        )}
      </div>
      {showThird && (
        <div className='typed-single'>
          <ReactTyped
            strings={[
              'Frontend',
              'React',
              'TypeScript',
              'JavaScript',
              'Sass',
              'AWS',
              'HTML',
              'CSS',
              'Backend',
              'Spring',
              'Node.js',
            ]}
            loop
            typeSpeed={100}
            showCursor={true}
            className='glow-text' // Apply glow effect to this component
            startDelay={3000} // Start typing the third string after the same delay as showSecond
          />
        </div>
      )}
    </div>
  );
};

export default Typed;
