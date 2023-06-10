import './styles.css';
import { GameView } from './GameView/GameView';
import { MenuView } from './MenuView/MenuView.jsx';
import { useEffect, useState } from 'react';
import { clear } from '@testing-library/user-event/dist/clear';
import { Playground } from './Playground/Playground';

export function MemoGame() {
  const [isGameStarted, setGameStarted] = useState(false);
  const [time, setTime] = useState(0);
  const [timeInterval, setTimeInterval] = useState();
  const [boardSize, setboardSize] = useState()
  const[amount, setAmount] = useState(0);
  const[isGameEnded, setGameEnded] = useState(false);
  const[myTime, setMyTime] = useState(0);

  useEffect(() => {
    if(isGameStarted) {
      const gameInterval = setInterval(() => {
        return setTime((prev) => prev + 1)
      }, 1000);
      setTimeInterval(gameInterval)
    } else {
      clearInterval(timeInterval)
      setTime(0)
    }

  }, [isGameStarted])
  

  console.log(isGameEnded,"isGameEnded")
  return (
    <div className="memoryGameMain">
      <h4>Memory Game</h4>
      <p>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </p>
      {isGameStarted ? (
        <GameView setGameStarted={setGameStarted} time={time} amount={amount} setAmout={setAmount} />
      ) : (
        <MenuView setGameStarted={setGameStarted} setBoardSize={setboardSize} amount={amount} />
      )}
      {isGameStarted && (<Playground 
      boardSize={boardSize} 
      amount={amount} 
      setAmount={setAmount} 
      setGameEnded={setGameEnded} 
      isGameEnded={isGameEnded}
      setGameStarted={setGameStarted}
      time={time}
      setMyTime={setMyTime}
      myTime={myTime}
      />) }
    </div>
  );
}
