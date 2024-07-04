import React, { useRef } from 'react';
import './App.css';
import './details.css';
import './content.css';
import Background from './Background';
import ImageComponent from './ImageComponent';
import Grow from '@mui/material/Grow';
import Navigation from './Navigation';
import Content from './Content';

function App() {
  const contentRef = useRef(null);

  const scrollToSection = (section) => {
    if (contentRef.current) {
      contentRef.current.scrollToSection(section);
    }
  };

  return (
    <div className='App'>
      <Background />
      <div className='Main'>
        <Grow
          in={true}
          style={{ transformOrigin: '0 0 0' }}
          {...(true ? { timeout: 1000 } : {})}
        >
          <div className='Side grid-item'>
            <div id='Details'>
              {/* <div id='Image'>
                <ImageComponent />
              </div> */}
              <div id='Name'>
                <h1>Graeme Doherty</h1>
              </div>
              <Navigation scrollToSection={scrollToSection} />
            </div>
          </div>
        </Grow>

        <Content ref={contentRef} />
      </div>
    </div>
  );
}

export default App;
