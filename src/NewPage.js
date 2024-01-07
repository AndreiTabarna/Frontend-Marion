import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './NewPageStyles.css';
import BackButton from './BackButton';


const NewPage = () => {
  const location = useLocation();
  const elementId = location?.state?.elementId;
  const [elementData, setElementData] = useState(null);
  const [similarElements, setSimilarElements] = useState([]);
  
const handleSimilarElementClick = (elementUrl) => {
  // Construiește URL-ul complet pentru redirectare
  const baseUrl = window.location.origin;
  const fullUrl = `${baseUrl}/${elementUrl}`;

  // Redirectează către NewPage.js cu elementUrl corespunzător
  window.location.href = fullUrl;
};

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        let data;

        if (elementId) {
          const response = await fetch(`https://web-production-f0a5.up.railway.app/api/elements/${elementId}/`);
          data = await response.json();
        } else {
          const pathParts = window.location.pathname.split('/');
          const potentialElementId = pathParts.slice(1).join('/');
          const queryString = window.location.search;
          const response = await fetch(`https://web-production-f0a5.up.railway.app/api/elements-by-url/?url=${potentialElementId}${queryString}`);
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

  // Efect pentru a obține și afișa elemente similare
  useEffect(() => {
    const fetchSimilarElements = async () => {
      try {
        if (elementData?.id) {
          const response = await fetch(`https://web-production-f0a5.up.railway.app/api/similar-elements/${elementData.id}/`);
          const similarElementsData = await response.json();
          console.log('Similar Elements Data from API:', similarElementsData);
          setSimilarElements(similarElementsData);
        }
      } catch (error) {
        console.error('Error fetching similar elements data:', error);
      }
    };

    fetchSimilarElements();
  }, [elementData]);

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
      <p>{perioada}</p>
      <p>{tarif}</p>
      <p>{telefon}</p>
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

    {acteParagraphs.length > 1 && <hr />}

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
      
    {similarElements.length > 0 && (
      <>
        <h2 className="similar-elements-title">Alte destinatii ce v-ar putea interesa:</h2>
        <div className="similar-elements-container">
        {similarElements.map((similarElement, index) => (
        <div key={index} className="similar-element" onClick={() => handleSimilarElementClick(similarElement.element_url)}>
        <img src={similarElement.image_url} alt={`Similar Element ${index}`} />
        </div>
        ))}
        </div>
      </>
    )}
      
      <hr class="hr-element" />

      <BackButton />
    </div>
  );
};

export default NewPage;
