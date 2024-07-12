// src/App.js
import React, { useRef, useState, useEffect, useContext } from 'react';
import './App.css';
import './details.css';
import './Components/Content/content.css';
import ThemeSelector from './Components/ThemeSelector/ThemeSelector';
import { ThemeContext } from './Components/ThemeSelector/ThemeContext';
import Background from './Background';
import Navigation from './Components/Navigation/Navigation';
import ContactFAB from './Components/Contact/ContactFAB';
import SocialMediaLinks from './Components/SocialMedia/SocialMediaLinks';
import Content from './Components/Content/Content';
import { Slide } from '@mui/material';

function App() {
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const { theme } = useContext(ThemeContext);
  // Check if theme is defined before accessing properties

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
        <Slide
          in={true}
          direction='right'
          style={{ transformOrigin: '0 0 0' }}
          {...(true ? { timeout: 1000 } : {})}
        >
          <div
            className='Side grid-item'
            style={{ backgroundColor: theme.background, color: theme.text }}
          >
            <div
              id='Details'
              style={{ boxShadow: `0 4px 10px ${theme.primary}` }}
            >
              <div id='Name'>
                <div>
                  <ThemeSelector />
                </div>
              </div>
              <Navigation
                scrollToSection={scrollToSection}
                activeSection={activeSection}
              />
              <SocialMediaLinks />
            </div>
          </div>
        </Slide>
        <Content
          aboutRef={aboutRef}
          resumeRef={resumeRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
        />
        <div className='ContactFAB-Wrapper'>
          <ContactFAB />
        </div>
      </div>
    </div>
  );
}

export default App;
