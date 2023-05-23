import './styles.css';
import png from '../../../Images/mytopkid.com-garten-of-banban-3-cliparts-20.png';
import jpg from '../../../Images/obraz-w-drewnianej-ramie-40x50-cm-zyd-iii-marian-kaszuba-b-iext79826113.jpg';
import gif from '../../../Images/stylowi_pl_humor_teczowe-gify-120-animowanych-obrazow-teczy-za-darm_55899455.gif';
import { RoundImage } from '../../../Components/RoundImage/RoundImage';

export function Exerciseimages() {
  const images = [
    {
      title: 'To jest png!',
      src: png,
      width: 50,
      height: 50,
      color: 'red',
    },
    {
      title: 'To jest jpg!',
      src: jpg,
      width: 150,
      height: 150,
      color: 'yellow',
    },
    {
      title: 'To jest gif!',
      src: gif,
      width: 250,
      height: 250,
      color: 'blue',
    },
  ];

  return (
    <div>
      {images.map((el) => (
        <RoundImage
          title={el.title}
          src={el.src}
          width={el.width}
          height={el.height}
          color={el.color}
        />
      ))}
      {/* <img className='png' src={png} alt="ziomale"/>
    <img src={jpg} alt="szczęśliwy żyd liczący pieniądze"/>
    <img src={gif} alt="Kot"/> */}

      {/* backgroun url*/}
      {/* <div className='imageBackground'>{png}</div> */}
    </div>
  );
}
