import React, { useState, useEffect } from 'react';
import { ReactTyped } from 'react-typed';
import './about.css'; // Import the CSS file

const Typed = () => {
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecond(true);
    }, 2000); // Wait for 3 seconds before showing the second typed component

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='typed-container'>
      <div className='typed-item'>
        <ReactTyped
          strings={[`Hi , I'm Graeme &#x1F44B;`]}
          typeSpeed={100}
          showCursor={false}
          className='typed-text'
        />
        {showSecond && (
          <>
            <ReactTyped
              strings={['I am a <b>Software Engineer</b>']}
              typeSpeed={100}
              showCursor={false}
              className='typed-text'
              startDelay={2000} // Start typing the second string after a delay
            />
            <ReactTyped
              strings={[
                'Frontend',
                'React',
                'TypeScript',
                'JavaScript',
                'Sass',
                'Android',
                'iOS',
                'Backend',
                'Spring',
                'Node',
                'SQL',
              ]}
              loop
              typeSpeed={200}
              showCursor={false}
              className='typed-text third-typed'
              startDelay={5000} // Start typing the third string after a delay
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Typed;
