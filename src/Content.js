import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import Slide from '@mui/material/Slide';
import './content.css';

const Content = forwardRef((props, ref) => {
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  useImperativeHandle(ref, () => ({
    scrollToSection: (section) => {
      if (section === 'About' && aboutRef.current) {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (section === 'Resume' && resumeRef.current) {
        resumeRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (section === 'Skills' && skillsRef.current) {
        skillsRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (section === 'Projects' && projectsRef.current) {
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    },
  }));

  return (
    <div className='Content grid-item'>
      <Slide
        in={true}
        container={aboutRef.current}
        style={{ transformOrigin: '0 0 0' }}
        {...(true ? { timeout: 500 } : {})}
      >
        <div className='Content-Row' ref={aboutRef}>
          <h1>About</h1>
        </div>
      </Slide>
      <Slide
        in={true}
        container={resumeRef.current}
        style={{ transformOrigin: '0 0 0' }}
        {...(true ? { timeout: 800 } : {})}
      >
        <div className='Content-Row' ref={resumeRef}>
          <h1>Resume</h1>
        </div>
      </Slide>
      <Slide
        in={true}
        container={skillsRef.current}
        style={{ transformOrigin: '0 0 0' }}
        {...(true ? { timeout: 1100 } : {})}
      >
        <div className='Content-Row' ref={skillsRef}>
          <h1>Skills</h1>
        </div>
      </Slide>
      <Slide
        in={true}
        container={projectsRef.current}
        style={{ transformOrigin: '0 0 0' }}
        {...(true ? { timeout: 1400 } : {})}
      >
        <div className='Content-Row' ref={projectsRef}>
          <h1>Projects</h1>
        </div>
      </Slide>
    </div>
  );
});

export default Content;
