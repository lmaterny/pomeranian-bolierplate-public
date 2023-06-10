import { Button } from '../Button/Buttton';
import { Menu } from '../Menu/Menu';
import { SelectButtonsMemo } from '../Select ButtonsMemo/SelectButtonsMemo';
import './MenuView.css';

export const MenuView = ({ setGameStarted, setBoardSize, myTime, amount, gameEnded, setAmount, boardSize }) => {
  return (
    <>
    {gameEnded && <p>Twój wynik to {boardSize/2} znalezionych par w czasie {myTime} prz użyciu {amount} kliknięć </p>}
      <Menu label="Liczba Elementów">
        <SelectButtonsMemo
        setValue={setBoardSize}
        options ={[
          {
          value: 8,
          content: '8 elementów',
          isActive: false,
          },
          {
            value: 16,
            content: '16 elementów',
            isActive: false,
            },
            {
              value: 20,
              content: '20 elementów',
              isActive: false,
              },

        ]}
        />
        </Menu>
      <Menu label="Przyciski Sterujące">
        <Button
        isControl={true}
        onClick={() => {
          setGameStarted(true);
          setAmount(0)
        }}
        >
        Start
        </Button>
      </Menu>
    </>
  );
};
