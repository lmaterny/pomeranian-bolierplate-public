import { Button } from '../Button/Buttton';
import { Menu } from '../Menu/Menu';
import { SelectButtonsMemo } from '../Select ButtonsMemo/SelectButtonsMemo';
import './MenuView.css';

export const MenuView = ({ setGameStarted, setBoardSize, myTime, amount,isGameEnded }) => {
  return (
    <>
    {isGameEnded && <p>Twój wynik to {amount} par w czasie {myTime} </p>}
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
        }}
        >
        Start
        </Button>
      </Menu>
    </>
  );
};
