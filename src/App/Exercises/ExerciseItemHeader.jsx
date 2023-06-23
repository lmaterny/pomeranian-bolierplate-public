import { GoBackLink } from '../Components/GoBack/GoBack';
import React from 'react';
import './header.css';

export function ExerciseItemHeader({ data }) {
  return (
    <div className="exercise-item-header">
      <p>{`Tytuł: ${data?.linkLabel || '-'}`}</p>
      <p>{`Data: ${data?.date || '-'}`}</p>
      <GoBackLink />
    </div>
  );
}
