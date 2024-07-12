import React, { useState, useContext } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { ThemeContext } from './ThemeContext';

import './themeSelector.css'; // Custom CSS if needed
import themes from '../../styles'; // Import your theme definitions

const ThemeSelector = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* Button to open the theme selection dialog */}
      <Button onClick={handleClickOpen} sx={{ color: theme.text }}>
        Theme
      </Button>

      {/* Dialog for selecting the theme */}
      <Dialog open={open} onClose={handleClose}>
        <DialogContent sx={{ background: theme.background }}>
          <Box component='form' sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {/* Map over keys of themes object and render PalleteBar for each theme */}
            {Object.keys(themes).map((themeName, index) => (
              <PalleteBar
                key={index}
                theme={themes[themeName]}
                toggleTheme={toggleTheme}
              />
            ))}
          </Box>
          <DialogActions>
            <Button onClick={handleClose} sx={{ color: themes.custom.accent }}>
              Ok
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ThemeSelector;

const PalleteBar = ({ theme, toggleTheme }) => {
  // Define an array of theme properties you want to display
  const themeProperties = [
    { name: 'Background', color: theme.background },
    { name: 'Text', color: theme.text },
    { name: 'Primary', color: theme.primary },
    { name: 'Secondary', color: theme.secondary },
    { name: 'Accent', color: theme.accent },
  ];

  const handleClick = () => {
    console.log('theme ', theme.name);
    toggleTheme(theme.name); // Update theme based on the clicked theme name
  };

  return (
    <>
      <h4 style={{ color: theme.text }}>{theme.name}</h4>
      <div className='pallete-bar' onClick={handleClick}>
        {themeProperties.map((property, index) => (
          <div
            key={index}
            className='pallete-color'
            style={{ backgroundColor: property.color }}
            data-color={property.color}
          ></div>
        ))}
      </div>
    </>
  );
};
