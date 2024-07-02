import './card.css';
import React, { useState, useEffect } from 'react';
import { Glow, G } from '@codaworks/react-glow';

const usePointerGlow = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const syncPointer = ({ x: pointerX, y: pointerY }) => {
      const x = pointerX.toFixed(2);
      const y = pointerY.toFixed(2);
      const xp = (pointerX / window.innerWidth).toFixed(2);
      const yp = (pointerY / window.innerHeight).toFixed(2);
      document.documentElement.style.setProperty('--x', x);
      document.documentElement.style.setProperty('--xp', xp);
      document.documentElement.style.setProperty('--y', y);
      document.documentElement.style.setProperty('--yp', yp);
      setStatus({ x, y, xp, yp });
    };
    document.body.addEventListener('pointermove', syncPointer);
    return () => {
      document.body.removeEventListener('pointermove', syncPointer);
    };
  }, []);
  return [status];
};

const Card = (props) => {
  useEffect(() => {
    console.log('Data', props.data.skill);
  });
  const [status] = usePointerGlow();
  return (
    <main>
      <article data-glow>
        <span data-glow />
        <h1>console.log("Hello World") </h1>
        <button data-glow style={{ color: 'white' }}>
          <span>{props.data.skill}</span>
        </button>
      </article>
    </main>
  );
};

export default Card;
