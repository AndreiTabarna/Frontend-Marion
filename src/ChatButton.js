import React, { useState, useEffect } from 'react';
import WhatsAppButton from 'react-whatsapp-button';

const ChatButton = () => {
  const [showButton, setShowButton] = useState(false);

  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    zIndex: '1000',
    opacity: showButton ? 1 : 0, // Afișează butonul doar când showButton este true
    transition: 'opacity 0.05s ease-in-out', // Adăugă un efect de tranziție pentru opacitate
  };

  const largeButtonStyle = {
    width: '120px', // Înlocuiește cu lățimea dorită
    height: '120px', // Înlocuiește cu înălțimea dorită
  };

  useEffect(() => {
    const handleScroll = () => {
      // Calculează dacă pagina a fost derulată suficient pentru a afișa butonul
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setShowButton(scrollY > 100); // Afișează butonul dacă s-a derulat mai mult de 100 de pixeli
    };

    // Adaugă un eveniment de ascultare pentru scroll
    window.addEventListener('scroll', handleScroll);

    // Curăță evenimentul de ascultare când componenta se demontează
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <WhatsAppButton
      phoneNumber="731757149"
      text="Buna ziua! Am o intrebare."
      countryCode="40"
      style={{ ...buttonStyle, ...(window.innerWidth <= 1770 && largeButtonStyle) }}
    />
  );
};

export default ChatButton;

