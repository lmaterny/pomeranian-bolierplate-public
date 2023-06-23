import { Link } from 'react-router-dom';
import React from 'react';
import { blockRouterMetaData } from './view-router-data';

export const ExerciseLinks = () => {
  return (
    <ul>
      {blockRouterMetaData.map((blockMetaData) => (
        <li key={blockMetaData.path}>
          <Link to={blockMetaData.path}>{blockMetaData.linkLabel}</Link>
        </li>
      ))}
    </ul>
  );
};
