import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import './HomePageStyles.css';
import NewPage from './NewPage';
import SearchBar from './SearchBar';
import loadingImage from './loading.gif';

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

  @media (max-width: 1770px) {
    font-size: 80px;
    margin-top: 400px;
    margin-bottom: 400px;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px; /* Adjust the height as needed */
`;

const LoadingImage = styled.img`
  width: 100px; /* Adjust the default size as needed */
  margin-bottom: 80px;

  @media (max-width: 1770px) and (min-height: 1080px) {
    width: 180px; /* Adjust the size for smaller screens */
    margin-bottom: 40px; /* Adjust the margin for smaller screens */
  }
`;

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [allImagesData, setAllImagesData] = useState([]);
  const [displayedImagesData, setDisplayedImagesData] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasMoreImages, setHasMoreImages] = useState(true);
  const [hasReturned, setHasReturned] = useState(false);
  const [isAnimationCompleted, setIsAnimationCompleted] = useState(false);

  const IMAGES_PER_PAGE = 6;
  const SCROLL_THRESHOLD = 80; // Adjust the threshold as needed

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/images/');
        const data = await response.json();

        console.log('Images Data from API:', data);

        setAllImagesData(data);

        if (!hasReturned) {
          // Scroll to the position stored in localStorage
          const storedScrollY = localStorage.getItem('scrollY');
          if (storedScrollY) {
            window.scrollTo(0, parseInt(storedScrollY, 10));
          }

          setHasReturned(true);
        }

        // Restore the previously displayed images from localStorage
        const storedDisplayedImages = JSON.parse(localStorage.getItem('displayedImages')) || [];
        setDisplayedImagesData(storedDisplayedImages);
      } catch (error) {
        console.error('Error fetching images data:', error);
      }
    };

    fetchData();
  }, [hasReturned]);

  const handleImageClick = (elementUrl, elementId) => {
    // Save the current scroll position to localStorage
    localStorage.setItem('scrollY', window.scrollY.toString());

    console.log('Element ID:', elementId);
    navigate(`/${elementUrl}`, { state: { elementId } });
  };

  const handleSearch = (filteredImagesData) => {
    if (filteredImagesData.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }
    setDisplayedImagesData(filteredImagesData.slice(0, IMAGES_PER_PAGE));

    // Save the displayed images to localStorage
    localStorage.setItem('displayedImages', JSON.stringify(filteredImagesData.slice(0, IMAGES_PER_PAGE)));
  };

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;

    if (
      isAnimationCompleted &&
      hasMoreImages &&
      !loading &&
      scrollY + window.innerHeight + SCROLL_THRESHOLD >= document.body.scrollHeight
    ) {
      setLoading(true);

      setTimeout(() => {
        const currentLength = displayedImagesData.length;
        const newImages = allImagesData.slice(currentLength, currentLength + IMAGES_PER_PAGE);

        if (newImages.length === 0) {
          setHasMoreImages(false);
        } else {
          setDisplayedImagesData((prevImages) => [...prevImages, ...newImages]);
        }

        // Save the updated displayed images to localStorage
        localStorage.setItem('displayedImages', JSON.stringify(displayedImagesData));

        setLoading(false);
      }, 1000); // Simulate a delay for loading (adjust as needed)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, displayedImagesData, allImagesData, hasMoreImages, isAnimationCompleted]);

  // Adăugăm un efect pentru a seta isAnimationCompleted pe true după un timp (poate fi ajustat)
  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setIsAnimationCompleted(true);
    }, 500); // Ajustează timpul în milisecunde

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      {noResults ? (
        <NoResultsText>Nu Exista Rezultate!</NoResultsText>
      ) : (
        <>
          <Container>
            {displayedImagesData.map((imageData, index) => (
              <img
                key={index}
                className="destination-image"
                src={imageData.image_url}
                alt={`Destination ${index + 1}`}
                onClick={() => handleImageClick(imageData.element_url, imageData.element_id)}
              />
            ))}
          </Container>
          {loading && hasMoreImages && (
            <LoadingContainer>
              <LoadingImage src={loadingImage} alt="Loading" />
            </LoadingContainer>
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;

