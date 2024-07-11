import React from 'react';
import Slide from '@mui/material/Slide';
import About from '../About/About';
import './content.css';

const Content = ({ aboutRef, resumeRef, skillsRef, projectsRef }) => {
  return (
    <div className='Content grid-item'>
      <Slide
        in={true}
        container={aboutRef.current}
        style={{ transformOrigin: '0 0 0' }}
        timeout={2000}
        direction='up'
      >
        <div className='Content-Row' id='About' ref={aboutRef}>
          <About />
        </div>
      </Slide>
      <Slide
        in={true}
        container={resumeRef.current}
        style={{ transformOrigin: '0 0 0' }}
        timeout={1600}
        direction='up'
      >
        <div className='Content-Row' id='Resume' ref={resumeRef}>
          <h1>Resume</h1>
        </div>
      </Slide>
      <Slide
        in={true}
        container={skillsRef.current}
        style={{ transformOrigin: '0 0 0' }}
        timeout={1200}
        direction='up'
      >
        <div className='Content-Row' id='Skills' ref={skillsRef}>
          <h1>Skills</h1>
        </div>
      </Slide>
      <Slide
        in={true}
        container={projectsRef.current}
        style={{ transformOrigin: '0 0 0' }}
        timeout={800}
        direction='up'
      >
        <div className='Content-Row' id='Projects' ref={projectsRef}>
          <h1>Projects</h1>
        </div>
      </Slide>
    </div>
  );
};

export default Content;
