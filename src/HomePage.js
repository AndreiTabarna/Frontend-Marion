import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import './HomePageStyles.css';
import NewPage from './NewPage';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

// Importă funcția importAll
const importAll = (r) => r.keys().map(r);

// Importă dinamic imaginile
const images = importAll(require.context('./Images/iloveimg-upscaled', false, /\.(jpg)$/));

const HomePage = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    // Redirecționează la noua pagină la click pe imagine
    navigate('/new-page');
  };

  return (
    <Container>
      {images.map((image, index) => (
        // Utilizează onClick pentru a trata evenimentul de click pe fiecare imagine
        <img
          key={index}
          className="destination-image"
          src={image}
          alt={`Destination ${index + 1}`}
          onClick={handleImageClick}
        />
      ))}
    </Container>
  );
};

export default HomePage;
