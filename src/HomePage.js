import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import './HomePageStyles.css';
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
  const [allImagesData, setAllImagesData] = useState([]);
  const [displayedImagesData, setDisplayedImagesData] = useState([]);
  const [searchedImagesData, setSearchedImagesData] = useState([]);
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
        const response = await fetch('https://web-production-f0a5.up.railway.app/api/images/');
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

        const storedDisplayedImages = localStorage.getItem('displayedImages');
        if (storedDisplayedImages) {
          setDisplayedImagesData(JSON.parse(storedDisplayedImages));
        } else {
          setDisplayedImagesData(data.slice(0, IMAGES_PER_PAGE));
        }
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
    setSearchedImagesData(filteredImagesData);
    setDisplayedImagesData(filteredImagesData.slice(0, IMAGES_PER_PAGE));
  };

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const isMediaQueryMatched = window.matchMedia('(max-width: 1770px) and (min-height: 1080px)').matches;
    const offset = isMediaQueryMatched ? 2400 : 1100;
    if (
      isAnimationCompleted &&
      hasMoreImages &&
      !loading &&
      scrollY + window.innerHeight + SCROLL_THRESHOLD >= document.body.scrollHeight - offset
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

        setLoading(false);
        localStorage.setItem('displayedImages', JSON.stringify(displayedImagesData));
      }, 500); // Simulate a delay for loading (adjust as needed)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Add event listeners for beforeunload and unload
    const handleBeforeUnload = () => {
      // Clear localStorage when the page is about to be unloaded
      localStorage.clear();
    };

    const handleUnload = () => {
      // Clear localStorage when the page is unloaded
      localStorage.clear();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('unload', handleUnload);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('unload', handleUnload);
    };
  }, [loading, displayedImagesData, allImagesData, hasMoreImages, isAnimationCompleted, handleScroll]);

  // Add an effect to set isAnimationCompleted to true after a timeout
  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setIsAnimationCompleted(true);
    }, 500); // Adjust the timeout in milliseconds

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
            {searchedImagesData.length > 0
              ? searchedImagesData.map((imageData, index) => (
                  <img
                    key={index}
                    className="destination-image"
                    src={imageData.image_url}
                    alt={`Destination ${index + 1}`}
                    onClick={() => handleImageClick(imageData.element_url, imageData.element_id)}
                  />
                ))
              : displayedImagesData.map((imageData, index) => (
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

