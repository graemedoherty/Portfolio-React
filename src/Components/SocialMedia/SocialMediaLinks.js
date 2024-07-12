import React, { useContext } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ThemeContext } from '../ThemeSelector/ThemeContext';
import './socialMediaLinks.css';

const SocialMediaLinks = () => {
  const { theme } = useContext(ThemeContext);

  const iconStyle = {
    color: theme.primary,
    margin: '0 10px', // Add some spacing between icons if needed
  };
  return (
    <div id='Social-Icons'>
      <a
        href='https://facebook.com'
        target='_blank'
        rel='noopener noreferrer'
        style={iconStyle}
      >
        <FacebookIcon />
      </a>
      <a
        href='https://instagram.com'
        target='_blank'
        rel='noopener noreferrer'
        style={iconStyle}
      >
        <InstagramIcon />
      </a>
      <a
        href='https://linkedin.com'
        target='_blank'
        rel='noopener noreferrer'
        style={iconStyle}
      >
        <LinkedInIcon />
      </a>
      <a
        href='https://github.com'
        target='_blank'
        rel='noopener noreferrer'
        style={iconStyle}
      >
        <GitHubIcon />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
