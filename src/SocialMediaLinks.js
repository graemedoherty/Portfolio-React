import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './socialMediaLinks.css';

const SocialMediaLinks = () => {
  return (
    <div
      id='Social-Icons'
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '200px',
      }}
    >
      <a
        href='https://www.facebook.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FacebookIcon sx={{ color: 'white' }} />
      </a>
      <a
        href='https://www.instagram.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <InstagramIcon sx={{ color: 'white' }} />
      </a>
      <a
        href='https://www.linkedin.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <LinkedInIcon sx={{ color: 'white' }} />
      </a>
      <a
        href='https://www.github.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <GitHubIcon sx={{ color: 'white' }} />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
