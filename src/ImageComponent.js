import React from 'react';
import Grow from '@mui/material/Grow';

const ImageComponent = () => {
  return (
    <Grow
      in={true}
      style={{ transformOrigin: '0 0 0' }}
      {...(true ? { timeout: 1000 } : {})}
    >
      <div style={{ zIndex: 100 }}>
        <img
          src={`${process.env.PUBLIC_URL}/images/portfolio-pic.png`}
          alt='Me'
          style={{ width: '200px', zIndex: 100, borderRadius: 200 / 2 }}
        />
      </div>
    </Grow>
  );
};

export default ImageComponent;
