import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './NewPageStyles.css';
import BackButton from './BackButton';

const NewPage = () => {
  const location = useLocation();
  const elementId = location?.state?.elementId;
  const [elementData, setElementData] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      let data;

      if (elementId) {
        // Dacă există elementId, face solicitarea la endpoint-ul specific
        const response = await fetch(`http://127.0.0.1:8000/api/elements/${elementId}/`);
        data = await response.json();
      } else {
        // Dacă nu există elementId, obține id-ul din URL și face solicitarea la endpoint-ul potrivit
        const pathParts = window.location.pathname.split('/');
        const potentialElementId = pathParts.slice(1).join('/');  // Obține path-ul după primul '/'

        const queryString = window.location.search;  // Obține query string-ul

        const response = await fetch(`http://127.0.0.1:8000/api/elements-by-url/?url=${potentialElementId}${queryString}`);
        data = await response.json();
      }

      console.log('Element Data from API:', data);
      setElementData(data);
    } catch (error) {
      console.error('Error fetching element data:', error);
    }
  };

  fetchData();
}, [elementId]);

  // Restul codului rămâne neschimbat

  // Verifica daca elementData exista, altfel returneaza null
  if (!elementData) {
    return null;
  }

  // Destructurare date din elementData
  const { imagine, perioada, tarif, telefon, program, include, nu_include, acte, important } = elementData;

const programParagraphs = program.split('\n');
const includeParagraphs = include.split('\n');
const nuIncludeParagraphs = nu_include.split('\n');
const acteParagraphs = acte.split('\n');
const importantParagraphs = important.split('\n');

return (
  <div className="NewPage">
  <div className="image-container">
  
      <img src={imagine} alt="Imagine" className="image" />
      <div className="info-container">
      <p>Perioada: {perioada}</p>
      <p>Tarif: {tarif}</p>
      <p>Telefon: {telefon}</p>
     </div>
  </div>
     <hr />

    {programParagraphs.map((paragraph, index) => (
      paragraph.trim().includes("||") ? (
        <p key={index} className="title">{paragraph.trim()}</p>
      ) : (
        <p key={index}>{paragraph.trim()}</p>
      )
    ))}



      <hr />

    {/* Parsare include */}
    <p className="title">{includeParagraphs[0]}</p>
    <ul>
      {includeParagraphs.slice(1).map((item, index) => (
        // Exclude elementele care contin doar caractere newline
        item.trim() !== "" && (
          <li key={index}>{item}</li>
        )
      ))}
    </ul>

    <hr />

    {/* Parsare nu_include */}
    <p className="title">{nuIncludeParagraphs[0]}</p>
    <ul>
      {nuIncludeParagraphs.slice(1).map((item, index) => (
        // Exclude elementele care contin doar caractere newline
        item.trim() !== "" && (
          <li key={index}>{item}</li>
        )
      ))}
    </ul>

    <hr />

    {/* Parsare acte */}
    <p className="title">{acteParagraphs[0]}</p>
    <ul>
      {acteParagraphs.slice(1).map((item, index) => (
        // Exclude elementele care contin doar caractere newline
        item.trim() !== "" && (
          <li key={index}>{item}</li>
        )
      ))}
    </ul>

    <hr />

    {/* Parsare important */}
    <p className="title">{importantParagraphs[0]}</p>
    <ul>
      {importantParagraphs.slice(1).map((item, index) => (
        // Exclude elementele care contin doar caractere newline
        item.trim() !== "" && (
          <li key={index}>{item}</li>
        )
      ))}
    </ul>

      <hr />

      <BackButton />
    </div>
  );
};

export default NewPage;

