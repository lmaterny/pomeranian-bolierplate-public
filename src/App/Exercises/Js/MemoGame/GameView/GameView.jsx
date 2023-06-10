import { Button } from '../Button/Buttton';
import { Menu } from '../Menu/Menu';
import { Playground } from '../Playground/Playground';
import './GameView.css';

export const GameView = ({ setGameStarted,time, amount, setAmout }) => {
  return (
    <>
      <Menu label={'CZAS GRY'}>
        <Button isDisabled={true}>{time}</Button>
      </Menu>
      <Menu label={'LICZBA RUCHÓW'}>
        <Button isDisabled={true}>{amount}</Button>
      </Menu>
      <Menu label={'PRZYCISKI STERUJĄCE'}>
        <Button onClick={() => {setGameStarted(false); setAmout(0)}}>PASS</Button>
      </Menu>
      <Playground />
    </>
  );
};
