import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import resetImage from './1.png'; 

const SearchBar = ({ onSearch }) => {
  const [selectedCity, setSelectedCity] = useState('');
  const [cities, setCities] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState('');
  const [countries, setCountries] = useState([]);

  const [selectedTransport, setSelectedTransport] = useState('');
  const [transportOptions, setTransportOptions] = useState([]);

  const handleSearch = async () => {
    try {
      const url = `http://127.0.0.1:8000/api/images/?Oras=${selectedCity}&Tara=${selectedCountry}&Transport=${selectedTransport}`;
      const response = await fetch(url);
      const data = await response.json();

      console.log('Data from search:', data);

      // Invoke the onSearch callback with the filtered data
      onSearch(data);
    } catch (error) {
      console.error('Error searching data:', error);
    }
  };

  const handleReset = () => {
    // Reload the page when the reset button is clicked
    window.location.reload();
  };

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/unique-values/');
        const data = await response.json();

        // Update state with API data
        setCities(data.unique_orase);
        setCountries(data.unique_tari);
        setTransportOptions(data.unique_transport);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []); // Empty dependency array ensures that this effect runs once, similar to componentDidMount

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

      <button className="oval-button" onClick={handleSearch}>
        Cautare
      </button>

      {/* Add the reset button */}
      <button className="oval-button2" onClick={handleReset}>
        <img src={resetImage} alt="Reset" />
      </button>
    </div>
  );
};

export default SearchBar;

