import React from 'react';
import Game from './components/Game';
import StartGame from './components/StartGame';
import { useAppSelector } from './hooks/redux';

const randomNum = Math.floor(Math.random() * 10)
const randomSquare = randomNum < 9 ? randomNum : randomNum - 1

function App() {

  const game = useAppSelector(state => state.game)

  return (
    <div className="App">
      {!game.started && <StartGame/>}
      {game.started && <Game startingField={randomSquare}/>}
    </div>
  );
}

export default App;
