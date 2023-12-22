// Header.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Importă useLocation din React Router
import './Header.css';
import logo from './logo.png'; // Importă imaginea

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation(); // Utilizează useLocation pentru a accesa locația curentă

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Verifică dacă utilizatorul a navigat către altă pagină și actualizează starea imaginii
  const showLogo = location.pathname === '/' && scrollPosition === 0;

  return (
    <div className={`header ${scrollPosition > 0 ? 'scrolled' : ''}`}>
      {showLogo && <img src={logo} alt="App Logo" />}
    </div>
  );
};

export default Header;

