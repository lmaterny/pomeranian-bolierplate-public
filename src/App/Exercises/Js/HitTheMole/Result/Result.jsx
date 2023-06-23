import { Button } from '../Button/Button';
import { useState } from 'react';
import React from 'react';
export const Result = ({ score, time }) => {
  return (
    <>
      <h3>
        Gratulacje! Twój wynik to {score} złapane krety w czasie {time} sekund.
      </h3>
    </>
  );
};
