// SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const cities = ['Bucuresti', 'Cluj-Napoca', 'Timisoara'];

  const [selectedCountry, setSelectedCountry] = useState('');
  const countries = ['Franta', 'Italia', 'Spania'];

  const [selectedTransport, setSelectedTransport] = useState('');
  const transportOptions = ['Autocar', 'Avion'];

  return (
    <div className="search-bar-container">
      <select className="dropdown" onChange={(e) => setSelectedCity(e.target.value)}>
        <option value="">Oras Imbarcare</option>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>

      <select className="dropdown" onChange={(e) => setSelectedCountry(e.target.value)}>
        <option value="">Tara Destinatie</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>

      <select className="dropdown" onChange={(e) => setSelectedTransport(e.target.value)}>
        <option value="">Transport</option>
        {transportOptions.map((transport, index) => (
          <option key={index} value={transport}>
            {transport}
          </option>
        ))}
      </select>

      <button className="oval-button" disabled>Search</button>
    </div>
  );
};

export default SearchBar;

