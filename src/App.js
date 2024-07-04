import React, { useRef } from 'react';
import './App.css';
import './details.css';
import './content.css';
import Background from './Background';
import ImageComponent from './ImageComponent';
import Grow from '@mui/material/Grow';
import Navigation from './Navigation';

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === 'About' && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'Skills' && skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'Projects' && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
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
              <div id='Image'>
                <ImageComponent />
              </div>
              <div id='Name'>
                <h1>Graeme Doherty</h1>
              </div>
              <Navigation scrollToSection={scrollToSection} />
            </div>
          </div>
        </Grow>

        <div className='Content grid-item'>
          <div className='Content-Row About-Section' ref={aboutRef}>
            About
          </div>

          <div className='Content-Row Skills-Section' ref={skillsRef}>
            Skills
          </div>
          <div className='Content-Row Projects-Section' ref={projectsRef}>
            Projects
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
