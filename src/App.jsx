import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TicTacToe from "./games/TicTacToe";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games/tic-tac-toe" element={<TicTacToe />} />
      </Routes>
    </Router>
  );
};

export default App;
