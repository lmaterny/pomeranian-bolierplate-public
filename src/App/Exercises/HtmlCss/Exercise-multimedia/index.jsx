import './styles.css';
import React from 'react';

export function ExerciseMultimedia() {
  return (
    <div>
      <div className="colors">
        <h1 className="colorName">We Are All equals</h1>
        <h1 className="ShortHex">ShortHex</h1>
        <h1 className="NormalHex">NormalHex</h1>
        <h1 className="rgb">rgb</h1>
        <h1 className="rgba">rgba</h1>
        <h1 className="hsl">hsl</h1>
      </div>
      <div className="opacity">
        <span>Element znajdujący się w divie</span>
        <div style={{ opacity: '50%' }}>Something</div>
        {/* powyżej przykład, że przezroczystość kumuluje się w divie i trzeba na to uważać */}
      </div>
    </div>
  );
}
