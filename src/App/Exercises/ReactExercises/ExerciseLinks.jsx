import { Link } from 'react-router-dom';
import React from 'react';

import { blockRouterMetaData } from './view-router-data';

export const ExerciseLinks = () => {
  function getClassName(path) {
    if (window.location.path !== path) {
      return '';
    }

    return 'active';
  }
  return (
    <ul>
      {blockRouterMetaData.map((blockMetaData) => (
        <li key={blockMetaData.path}>
          <Link
            to={blockMetaData.path}
            className={getClassName(blockMetaData.path)}
          >
            {blockMetaData.linkLabel}
          </Link>
        </li>
      ))}
    </ul>
  );
};
