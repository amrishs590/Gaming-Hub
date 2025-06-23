import React, { useState } from 'react';
import './RockPaperScissors.css';

const choices = ['rock', 'paper', 'scissors'];

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const play = (choice) => {
    const compChoice = choices[Math.floor(Math.random() * 3)];
    setUserChoice(choice);
    setComputerChoice(compChoice);

    if (choice === compChoice) {
      setResult('Draw!');
    } else if (
      (choice === 'rock' && compChoice === 'scissors') ||
      (choice === 'scissors' && compChoice === 'paper') ||
      (choice === 'paper' && compChoice === 'rock')
    ) {
      setResult('You Win!');
    } else {
      setResult('You Lose!');
    }
  };

  return (
    <div className="rps-container">
      <h2>Rock Paper Scissors</h2>
      <div className="rps-buttons">
        {choices.map((choice) => (
          <button key={choice} onClick={() => play(choice)}>
            {choice}
          </button>
        ))}
      </div>
      <div className="rps-result">
        <p>You: {userChoice}</p>
        <p>Computer: {computerChoice}</p>
        <h3>{result}</h3>
      </div>
    </div>
  );
};

export default RockPaperScissors;
