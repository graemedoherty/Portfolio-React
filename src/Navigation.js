import React from 'react';
import './navigation.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Navigation = ({ scrollToSection }) => {
  const handleButtonClick = (section) => () => {
    scrollToSection(section);
  };

  const buttons = [
    <Button key='one' onClick={handleButtonClick('About')}>
      About
    </Button>,
    <Button key='two' onClick={handleButtonClick('Skills')}>
      Skills
    </Button>,
    <Button key='three' onClick={handleButtonClick('Projects')}>
      Projects
    </Button>,
  ];

  return (
    <div className='Navigation'>
      <ButtonGroup
        orientation='vertical'
        aria-label='Vertical button group'
        sx={{ width: 1, fontWeight: 200 }}
      >
        {buttons}
      </ButtonGroup>
    </div>
  );
};

export default Navigation;
