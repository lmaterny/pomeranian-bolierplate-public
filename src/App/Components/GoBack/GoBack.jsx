import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import './styles.css';

export const GoBackLink = ({ label }) => {
  return (
    <Link to=".." relative="path">
      {label || 'Cofnij'}
    </Link>
  );
};

export const GoBackButton = () => {
  const navigate = useNavigate();

  return <button onClick={() => navigate(-1)}>go back</button>;
};
