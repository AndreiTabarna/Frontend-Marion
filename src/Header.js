import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.css';
import logo from './logo.png';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const showLogo = location.pathname === '/' && scrollPosition === 0;

  return (
    <motion.div
      className={`header ${scrollPosition > 0 ? 'scrolled' : ''}`}
      initial={{ opacity: 1, height: 'auto' }}
      animate={{ opacity: showLogo ? 1 : 0, height: showLogo ? 'auto' : 0 }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ ease: 'easeOut', duration: 0.4 }}
    >
      {showLogo && (
        <motion.img
          src={logo}
          alt="App Logo"
          initial={{ opacity: 1 }}
          animate={{ opacity: showLogo ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ ease: 'easeOut', duration: 0.4 }}
        />
      )}
    </motion.div>
  );
};

export default Header;

