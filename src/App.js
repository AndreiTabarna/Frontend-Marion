import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './HomePage';
import NewPage from './NewPage';

import Banner from './Banner';
import SearchBar from './SearchBar';
import ScrollToTopButton from './ScrollToTopButton';
import Header from './Header';
import Footer from './Footer';

const AppContent = () => {
  const location = useLocation();
  const isNewPage = location.pathname !== '/';

  return (
    <div>
      {!isNewPage && <Header />}
      {!isNewPage && <Banner />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<NewPage />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;

