import { useEffect } from 'react';
import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
import './GameView.css';
import { Result } from '../Result/Result';

export const GameView = ({
  setGameStarted,
  score,
  setScore,
  time,
  setTime,
}) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      time > 0 && setTime(time - 1);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [time]);

  if (time == 0) {
    setGameStarted(false);
  }
  return (
    <>
      <Menu label="Czas do końca">
        <div className="value-field">{time}</div>
      </Menu>

      <Menu label="Wynik">
        <div className="value-field">{score}</div>
      </Menu>

      <Menu label="Przyciski sterujące">
        <Button
          onClick={() => {
            setGameStarted(false);
            setScore(0);
          }}
        >
          Stop
        </Button>
      </Menu>
    </>
  );
};
