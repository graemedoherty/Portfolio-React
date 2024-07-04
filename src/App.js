import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import './details.css';
import './content.css';
import Background from './Background';
import Grow from '@mui/material/Grow';
import SocialMediaLinks from './SocialMediaLinks';
import Navigation from './Navigation';
import Content from './Content';

function App() {
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const [activeSection, setActiveSection] = useState('About');

  const scrollToSection = (section) => {
    if (section === 'About' && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'Resume' && resumeRef.current) {
      resumeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'Skills' && skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'Projects' && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = [aboutRef, resumeRef, skillsRef, projectsRef];
    sections.forEach((section) => {
      if (section.current) {
        observer.observe(section.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.current) {
          observer.unobserve(section.current);
        }
      });
    };
  }, []);

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
              <div id='Name'>
                <h1>Graeme Doherty</h1>
              </div>
              <Navigation
                scrollToSection={scrollToSection}
                activeSection={activeSection}
              />
              <SocialMediaLinks />
            </div>
          </div>
        </Grow>

        <Content
          aboutRef={aboutRef}
          resumeRef={resumeRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
        />
      </div>
    </div>
  );
}

export default App;
