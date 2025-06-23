import React, { useEffect, useState } from 'react';
import './WhackAMole.css';

const WhackAMole = () => {
  const [moleIndex, setMoleIndex] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMoleIndex(Math.floor(Math.random() * 9));
    }, 700);
    return () => clearInterval(interval);
  }, []);

  const handleClick = (index) => {
    if (index === moleIndex) {
      setScore(score + 1);
      setMoleIndex(null);
    }
  };

  return (
    <div className="whack-container">
      <h2>Whack-a-Mole</h2>
      <h3>Score: {score}</h3>
      <div className="mole-grid">
        {Array(9).fill().map((_, idx) => (
          <div
            key={idx}
            className={`mole-hole ${idx === moleIndex ? 'active' : ''}`}
            onClick={() => handleClick(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default WhackAMole;
