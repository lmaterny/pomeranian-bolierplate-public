import './styles.css';
import React from 'react';
export const RoundImage = (props) => {
  const { title, src, height, color, width } = props;
  //title === props.title
  // console.log('To są propsy!',props)
  return (
    <div
      style={{
        width: width,
        height: height,
        color: color,
      }}
    >
      {props.title} <img src={props.src} alt={props.title} />
    </div>
  );
};
