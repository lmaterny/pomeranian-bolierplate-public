import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
import { Result } from '../Result/Result';
import { SelectButtons } from '../SelectButtons/SelectButtons';
import './MenuView.css';
import React from 'react';

export const MenuView = ({
  isGameStarted,
  setGameStarted,
  setTime,
  setScore,
  score,
  initialTime,
  setOptionChosen,
  time,
  setInitialTime,
}) => {
  return (
    <>
      {time === 0 && <Result score={score} time={initialTime} />}

      <Menu label="Czas gry">
        <SelectButtons
          setInitialTime={setInitialTime}
          setOptionChosen={setTime}
          options={[
            {
              label: '1 minuta',
              isActive: true,
              value: 1,
            },
            {
              label: '2 minuty',
              isActive: false,
              value: 2,
            },
            {
              label: '3 minuty',
              isActive: false,
              value: 3,
            },
          ]}
        />
      </Menu>

      <Menu label="Liczba kretów">
        <SelectButtons
          setTime={() => {}}
          options={[
            {
              label: '1 kret',
              isActive: true,
              value: 1,
            },
            {
              label: '2 krety',
              isActive: false,
              value: 2,
            },
            {
              label: '3 krety',
              isActive: false,
              value: 3,
            },
          ]}
        />
      </Menu>

      <Menu label="Przyciski sterujące">
        <Button onClick={() => setGameStarted(true)}>Start</Button>
      </Menu>
    </>
  );
};
