import React, { useState, useEffect, useContext } from 'react';
import { ReactTyped } from 'react-typed';
import './about.css'; // Import the CSS file
import { ThemeContext } from '../ThemeSelector/ThemeContext';

const Typed = () => {
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const { theme } = useContext(ThemeContext);

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
          style={{
            color: theme.name === 'Dark' ? theme.primary : theme.text,
          }}
          strings={['Hello, my name is Graeme 👋']}
          typeSpeed={50}
          showCursor={false}
          className='typed-text'
        />
        {showSecond && (
          <ReactTyped
            style={{
              color: theme.name === 'Dark' ? theme.primary : theme.text,
            }}
            strings={['I am a Software Engineer']}
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
            style={{
              color: theme.name === 'Dark' ? theme.primary : theme.text,
            }}
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
