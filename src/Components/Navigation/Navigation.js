import React, { useState, useEffect, useContext } from 'react';
import './navigation.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { ThemeContext } from '../ThemeSelector/ThemeContext';

const Navigation = ({ scrollToSection, activeSection }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleButtonClick = (section) => () => {
    scrollToSection(section);
  };

  const buttons = [
    { key: 'one', label: 'About', section: 'About' },
    { key: 'two', label: 'Resume', section: 'Resume' },
    { key: 'three', label: 'Skills', section: 'Skills' },
    { key: 'four', label: 'Projects', section: 'Projects' },
  ];

  return (
    <div className='Navigation'>
      <ButtonGroup
        orientation='vertical'
        aria-label='Vertical button group'
        sx={{
          color: theme.text,
          width: 1,
          fontWeight: 200,
          '& .MuiButton-root': {
            borderRadius: 0,
            transition: isMounted
              ? 'transform 0.3s ease, background-color 0.3s ease'
              : 'none',
            border: '1px solid transparent', // Ensure all buttons have a border
          },
          '& .MuiButton-root:hover': {
            borderColor: '#BBBDF6', // Change border color on hover
          },
        }}
      >
        {buttons.map((btn) => (
          <Button
            key={btn.key}
            onClick={handleButtonClick(btn.section)}
            sx={{
              backgroundColor:
                activeSection === btn.section ? theme.primary : 'inherit',
              color: activeSection === btn.section ? 'white' : 'inherit',
              '& .MuiButton-endIcon': {
                display: activeSection === btn.section ? 'flex' : 'none',
                fontSize: '2rem',
                marginTop: 'auto',
                marginBottom: 'auto',
              },
              transform:
                activeSection === btn.section
                  ? 'translateX(10px)'
                  : 'translateX(-20px)',
            }}
            endIcon={activeSection === btn.section ? <ArrowRightIcon /> : null}
          >
            <h5>{btn.label}</h5>
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default Navigation;
