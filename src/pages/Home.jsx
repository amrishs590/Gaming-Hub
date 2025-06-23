import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>🎮 Gaming Hub</h1>
      <div className="games-grid">
        <Link to="/games/tic-tac-toe" className="game-card">Tic Tac Toe</Link>
        <Link to="/games/rock-paper-scissor" className="game-card">Rock Paper Scissor</Link>
      </div>
    </div>
  );
};

export default Home;
