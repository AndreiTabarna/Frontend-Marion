// BackButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    // Redirecționează înapoi la pagina principală
    navigate('/');
  };

  return (
    <button className="back-button" onClick={handleBackClick}>
      Inapoi pe pagina principala
    </button>
  );
};

export default BackButton;

