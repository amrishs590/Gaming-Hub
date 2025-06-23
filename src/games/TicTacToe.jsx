import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? 'X' : 'O';
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  };

  return (
    <div className="tictactoe-container">
      <h2>Tic Tac Toe</h2>
      <div className="board">
        {board.map((cell, idx) => (
          <button key={idx} className="cell" onClick={() => handleClick(idx)}>
            {cell}
          </button>
        ))}
      </div>
      <div className="status">
        {winner
          ? `🎉 Winner: ${winner}`
          : board.includes(null)
          ? `Turn: ${isXTurn ? 'X' : 'O'}`
          : "It's a draw!"}
      </div>
      <button className="reset-btn" onClick={resetGame}>Restart</button>
    </div>
  );
};

function calculateWinner(cells) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // cols
    [0, 4, 8], [2, 4, 6]              // diags
  ];
  for (let [a, b, c] of lines) {
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a];
    }
  }
  return null;
}

export default TicTacToe;
