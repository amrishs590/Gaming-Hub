import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TicTacToe from './games/TicTacToe';
import RockPaperScissors from './games/RockPaperScissors';
import Snake from './games/Snake';
import MemoryMatch from './games/MemoryMatch';
import WhackAMole from './games/WhackAMole';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/games/rock-paper-scissors" element={<RockPaperScissors />} />
        <Route path="/games/snake" element={<Snake />} />
        <Route path="/games/memory-match" element={<MemoryMatch />} />
        <Route path="/games/whack-a-mole" element={<WhackAMole />} />
      </Routes>
    </Router>
  );
};

export default App;
