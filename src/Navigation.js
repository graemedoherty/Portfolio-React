import React from 'react';
import './navigation.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Navigation = ({ scrollToSection, activeSection }) => {
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
          width: 1,
          fontWeight: 200,
          '& .MuiButton-root': {
            borderRadius: 0,
            transition: 'transform 0.3s ease, background-color 0.3s ease',
          },
        }}
      >
        {buttons.map((btn) => (
          <Button
            key={btn.key}
            onClick={handleButtonClick(btn.section)}
            sx={{
              backgroundColor:
                activeSection === btn.section ? 'primary.main' : 'inherit',
              color: activeSection === btn.section ? 'white' : 'inherit',
              '& .MuiButton-endIcon': {
                display: activeSection === btn.section ? 'flex' : 'none',
                fontSize: '1.5rem',
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
