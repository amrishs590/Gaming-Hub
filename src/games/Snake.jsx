import React, { useState, useEffect, useRef } from 'react';
import './Snake.css';

const Snake = () => {
  const [snake, setSnake] = useState([[5, 5]]);
  const [food, setFood] = useState([8, 8]);
  const [dir, setDir] = useState([0, 1]);
  const [gameOver, setGameOver] = useState(false);
  const boardSize = 15;
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(moveSnake, 200);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      clearInterval(intervalRef.current);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [snake, dir]);

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowUp": setDir([-1, 0]); break;
      case "ArrowDown": setDir([1, 0]); break;
      case "ArrowLeft": setDir([0, -1]); break;
      case "ArrowRight": setDir([0, 1]); break;
    }
  };

  const moveSnake = () => {
    const newHead = [snake[0][0] + dir[0], snake[0][1] + dir[1]];

    if (
      newHead[0] < 0 || newHead[1] < 0 ||
      newHead[0] >= boardSize || newHead[1] >= boardSize ||
      snake.some(s => s[0] === newHead[0] && s[1] === newHead[1])
    ) {
      setGameOver(true);
      clearInterval(intervalRef.current);
      return;
    }

    const newSnake = [newHead, ...snake];
    if (newHead[0] === food[0] && newHead[1] === food[1]) {
      setFood([Math.floor(Math.random() * boardSize), Math.floor(Math.random() * boardSize)]);
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  return (
    <div className="snake-container">
      <h2>Snake Game</h2>
      {gameOver && <h3>Game Over!</h3>}
      <div className="board">
        {Array(boardSize).fill().map((_, row) =>
          Array(boardSize).fill().map((_, col) => {
            const isSnake = snake.some(([r, c]) => r === row && c === col);
            const isFood = food[0] === row && food[1] === col;
            return (
              <div
                key={`${row}-${col}`}
                className={`cell ${isSnake ? 'snake' : ''} ${isFood ? 'food' : ''}`}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Snake;
