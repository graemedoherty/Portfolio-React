import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import emailjs from 'emailjs-com';
import './contact.css';

const ContactFAB = () => {
  const userId = process.env.REACT_APP_EMAILJS_USERID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATEID;
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICEID;
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
    console.log('User ID ', userId, templateId, serviceId);
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
        //console.error('Error sending email:', error);
        // Handle error state
      });
  };

  return (
    <>
      <Fab
        className='fab'
        color='primary'
        aria-label='mail'
        onClick={handleOpen}
        sx={{
          backgroundColor: '#BBBDF6', // Set background color of Fab
          '&:hover': {
            backgroundColor: '#BBBDF6', // Adjust hover state if needed
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
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
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
              sx={{ backgroundColor: '#BBBDF6', borderRadius: 4 }} // Set input field background color
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
              sx={{ backgroundColor: '#BBBDF6', borderRadius: 4 }} // Set input field background color
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
              sx={{ backgroundColor: '#BBBDF6', borderRadius: 4 }} // Set input field background color
            />
            <Button type='submit' variant='contained' color='primary'>
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactFAB;
