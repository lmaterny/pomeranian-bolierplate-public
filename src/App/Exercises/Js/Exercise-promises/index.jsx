import { useEffect, useState } from 'react';
import './styles.css';
import React from 'react';
export function JsPromisesExercise({ parameterToEffect }) {
  const [getState, setState] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Wykonuje operację cykliczną...');
    }, 5000);

    //cleanup finction inside useEffect
    return () => {
      clearInterval(timer);
      console.log('Zatrzymuje operację cykliczną... Wykonuje cleanup');
    };
  }, [parameterToEffect, getState]);

  function logPromiseState(promise) {
    promise
      .then(() => {
        //sukces
        console.log('Stan:fulfilled');
        console.log('Promise completed sucessfuly');
      })
      .catch(() => {
        //porażka
        console.log('Stan:rejected');
        console.log('Promise completed failed');
      })
      .finally(() => {
        //tak czy inaczej to zrobię
        console.log('Stan: ');
        console.log('Promise completed');
      });
  }
  const myPromise = new Promise((resolve, rejected) => {
    setTimeout(() => {
      const random = Math.random();

      if (random < 0.5) {
        resolve();
      } else {
        rejected();
      }
    }, [myPromise]);
  });

  return <div className="playing-with-js-promises"></div>;
}
