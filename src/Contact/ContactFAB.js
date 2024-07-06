// src/Contact/ContactFAB.js
import React from 'react';
import Fab from '@mui/material/Fab';
import MailOutlineIcon from '@mui/icons-material/MailOutline'; // Import the MailOutline icon
import './contact.css';

const ContactFAB = () => {
  return (
    <Fab className='fab' color='primary' aria-label='mail'>
      <MailOutlineIcon />
    </Fab>
  );
};

export default ContactFAB;
