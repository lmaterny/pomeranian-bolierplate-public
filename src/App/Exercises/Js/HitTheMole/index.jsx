import { GameView } from './GameView/GameView';
import { MenuView } from './MenuView/MenuView.jsx';
import { Playground } from './Playground/Playground';
import { useEffect, useState } from 'react';
import './styles.css';
import { Result } from './Result/Result';
import React from 'react';
export function HitTheMole() {
  const [isGameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);
  const [initialTime, setInitialTime] = useState(time);

  useEffect(() => {
    time === 0 && setGameStarted(false);
  }, [time]);
  return (
    <div className="hit-the-mole">
      <h4>Hit The Mole</h4>
      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>

      {isGameStarted ? (
        <GameView
          setGameStarted={setGameStarted}
          score={score}
          setScore={setScore}
          time={time}
          setTime={setTime}
          isGameStarted={isGameStarted}
        />
      ) : (
        <>
          <MenuView
            time={time}
            initialTime={initialTime}
            setGameStarted={setGameStarted}
            score={score}
            setTime={setTime}
            setInitialTime={setInitialTime}
          ></MenuView>
        </>
      )}

      {isGameStarted && <Playground score={score} setScore={setScore} />}
    </div>
  );
}
