import { isDisabled } from '@testing-library/user-event/dist/utils';
import './Button.css';
import React from 'react';

export const Button = ({
  onClick,
  children,
  isDisabled,
  isActive,
  isControl,
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        disabled={isDisabled}
        className={`button ${isActive ? 'button-active' : ''} ${
          isControl ? `button-control` : ''
        }`}
        isActive={isActive}
        isControl={isControl}
      >
        {children}
      </button>
    </div>
  );
};
