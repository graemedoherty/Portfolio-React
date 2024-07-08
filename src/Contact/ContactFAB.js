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
        'service_dk4wbq3', // Replace with your actual service ID
        'template_r5qia1k', // Replace with your actual template ID
        formData,
        '7HvNUZq2VIFM82Cvs' // Replace with your actual user ID
      )
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        handleClose();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
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
