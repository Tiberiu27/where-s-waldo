import './styles/App.css';
import Header from './Components/Header';
import Game from './Components/Game';
import { useState } from 'react';
import GameOver from './Components/GameOver';
import SigninPopup from './Components/SigninPopup';

function App() {
  const [gameOver, setGameOver] = useState(false);
  const [showSigninPopup, setShowSigninPopup] = useState(true);
  const [charsFound, setCharsFound] = useState([]);
  const [score, setScore] = useState(0);

  const renderGame = () => {
    if(!gameOver) {
      return <Game gameOver={setGameOver} charsFound={charsFound} setCharsFound={setCharsFound}/>
    } else {
      return <GameOver score={score}/>
    }
  };

  return (
    <div className="App">
      
      {showSigninPopup ? null : <Header gameOver={gameOver} charsFound={charsFound} setScore={setScore}/>}
      {showSigninPopup ? <SigninPopup showPopup={setShowSigninPopup}/> : renderGame()}
    </div>
  );
}

export default App;
