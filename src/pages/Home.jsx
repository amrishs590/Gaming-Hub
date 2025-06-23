import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>🎮 Gaming Hub</h1>
      <div className="games-grid">
        <Link to="/games/tic-tac-toe">Tic Tac Toe</Link>
        <Link to="/games/rock-paper-scissors">Rock Paper Scissors</Link>
        <Link to="/games/snake">Snake</Link>
        <Link to="/games/memory-match">Memory Match</Link>
        <Link to="/games/whack-a-mole">Whack-a-Mole</Link>
      </div>
    </div>
  );
};

export default Home;
