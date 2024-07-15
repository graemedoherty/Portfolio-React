import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TextField from '@mui/material/TextField';
import emailjs from 'emailjs-com';
import { ThemeContext } from '../ThemeSelector/ThemeContext';
import './contact.css';

const ContactFAB = () => {
  const userId = process.env.REACT_APP_EMAILJS_USERID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATEID;
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICEID;
  const { theme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .send(
        serviceId, // Replace with your actual service ID
        templateId, // Replace with your actual template ID
        formData,
        userId // Replace with your actual user ID
      )
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        handleClose();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <>
      <Fab
        className='fab'
        aria-label='mail'
        onClick={handleOpen}
        sx={{
          backgroundColor: theme.primary,
          color: '#ffffff', // Original color or white for light theme
          transition: 'transform 0.2s ease-in-out', // Transition for transform property
          '&:hover': {
            transform: 'scale(1.05)', // Scale effect on hover
            color: theme.secondary,
            background: theme.primary,
          },
        }}
      >
        <MailOutlineIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contact Form</DialogTitle>
        <DialogContent sx={{ minWidth: 300, p: 2 }}>
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}
          >
            <TextField
              autoFocus
              margin='dense'
              id='name'
              name='name'
              label='Name'
              type='text'
              fullWidth
              required
              value={formData.name}
              onChange={handleChange}
              sx={{
                input: { color: theme.text },
                label: { color: theme.text },
              }}
            />
            <TextField
              margin='dense'
              id='email'
              name='email'
              label='Email Address'
              type='email'
              fullWidth
              required
              value={formData.email}
              onChange={handleChange}
              sx={{
                input: { color: theme.text },
                label: { color: theme.text },
              }}
            />
            <TextField
              margin='dense'
              id='message'
              name='message'
              label='Message'
              multiline
              rows={4}
              fullWidth
              required
              value={formData.message}
              onChange={handleChange}
              sx={{
                input: { color: theme.text },
                label: { color: theme.text },
              }}
            />
            <Button
              type='submit'
              variant='contained'
              sx={{ backgroundColor: theme.primary, color: theme.text }}
            >
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactFAB;
