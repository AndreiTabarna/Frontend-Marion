// ScrollToTopButton.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ButtonContainer $isVisible={isVisible} onClick={scrollToTop}>
      {/* Săgeată albă în formă de triunghi */}
      &#9650;
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: ${(props) => (props.$isVisible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #00a8ff;
  color: #fff;
  border-radius: 50%;
  font-size: 32px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005082;
  }
  
  @media (max-width: 1770px) {
    width: 120px;
    height: 120px;
    font-size: 70px;
  }
`;

export default ScrollToTopButton;

