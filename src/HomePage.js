import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import './HomePageStyles.css';
import NewPage from './NewPage';
import SearchBar from './SearchBar';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const NoResultsText = styled.p`
  font-size: 50px;
  font-weight: bold;
  color: #00a8ff;
  text-align: center;
  margin-bottom: 80px;
`;

const HomePage = () => {
  const navigate = useNavigate();
  const [allImagesData, setAllImagesData] = useState([]);
  const [displayedImagesData, setDisplayedImagesData] = useState([]);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/images/');
        const data = await response.json();

        console.log('Images Data from API:', data);

        setAllImagesData(data);
        setDisplayedImagesData(data);
      } catch (error) {
        console.error('Error fetching images data:', error);
      }
    };

    fetchData();
  }, []);

  const handleImageClick = (elementUrl) => {
    navigate(`/${elementUrl}`);
  };

  const handleSearch = (filteredImagesData) => {
    if (filteredImagesData.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }
    setDisplayedImagesData(filteredImagesData);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      {noResults ? (
        <NoResultsText>Nu Exista Rezultate!</NoResultsText>
      ) : (
        <Container>
          {displayedImagesData.map((imageData, index) => (
            <img
              key={index}
              className="destination-image"
              src={imageData.image_url}
              alt={`Destination ${index + 1}`}
              onClick={() => handleImageClick(imageData.element_url)}
            />
          ))}
        </Container>
      )}
    </div>
  );
};

export default HomePage;

