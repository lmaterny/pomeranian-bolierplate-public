import React from 'react';

// import './style.css';

export function SubRouteExample({ text }) {
  return (
    <div>
      <p>Jestem przykładowym routem</p>

      <input data-testid="textInput" placeholder="wpisz text" value={text} />
    </div>
  );
}
