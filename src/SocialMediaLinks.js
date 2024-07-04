import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './socialMediaLinks.css';

const SocialMediaLinks = () => {
  return (
    <div id='Social-Icons'>
      <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
        <FacebookIcon />
      </a>
      <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
        <InstagramIcon />
      </a>
      <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
        <LinkedInIcon />
      </a>
      <a href='https://github.com' target='_blank' rel='noopener noreferrer'>
        <GitHubIcon />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
