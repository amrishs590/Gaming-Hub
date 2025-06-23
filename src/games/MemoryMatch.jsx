import React, { useEffect, useState } from 'react';
import './MemoryMatch.css';

const generateCards = () => {
  const base = ['🐶', '🐱', '🐭', '🦊', '🐸', '🐵'];
  const cards = [...base, ...base]
    .sort(() => Math.random() - 0.5)
    .map((icon, index) => ({ id: index, icon, flipped: false, matched: false }));
  return cards;
};

const MemoryMatch = () => {
  const [cards, setCards] = useState(generateCards());
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    if (selected.length === 2) {
      const [first, second] = selected;
      if (cards[first].icon === cards[second].icon) {
        const updated = [...cards];
        updated[first].matched = true;
        updated[second].matched = true;
        setTimeout(() => setCards(updated), 500);
      } else {
        const updated = [...cards];
        updated[first].flipped = false;
        updated[second].flipped = false;
        setTimeout(() => setCards(updated), 500);
      }
      setSelected([]);
    }
  }, [selected]);

  const handleClick = (index) => {
    if (selected.length === 2 || cards[index].flipped || cards[index].matched) return;
    const updated = [...cards];
    updated[index].flipped = true;
    setCards(updated);
    setSelected([...selected, index]);
  };

  return (
    <div className="memory-container">
      <h2>Memory Match</h2>
      <div className="card-grid">
        {cards.map((card, idx) => (
          <div
            key={card.id}
            className={`card ${card.flipped || card.matched ? 'flipped' : ''}`}
            onClick={() => handleClick(idx)}
          >
            {card.flipped || card.matched ? card.icon : '❓'}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryMatch;
