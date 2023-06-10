import { isDisabled } from '@testing-library/user-event/dist/utils';
import './Button.css';

export const Button = ({ children, isActive, onClick, isDisabled }) => {
  const activeClass = isActive ? 'button-active' : '';
  return (
    <button
      onClick={onClick}
      className={`button ${activeClass}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
