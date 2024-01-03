import React from 'react';
import './Footer.css';  // Importați fișierul CSS
import ContractulCalatorului from './Contracte/1.pdf';
import InformatiiPrecontractuale from './Contracte/2.pdf';

const Footer = () => {
  return (
    <footer id="footerContainer">
      <div>
        <h3>Poliţe de asigurare:</h3>
        <p>- Seria IF-i nr. 3646 la GERMAN ROMANIAN ASSURANCE S.A. <br />(10.000 euro - valabilă până la 07 ianuarie 2024);</p>
        <p>- Seria I nr. 52883, la OMNIASIG VIENNA INSURANCE GROUP <br />(100.000 euro - valabilă până pe 29 ianuarie 2024);</p>
      </div>
      <div>
        <h3>Detalii Legale</h3>
        <p>
          <a href={ContractulCalatorului} download className="contracte">
            CONTRACTUL CALATORULUI
          </a>
        </p>
        <p>
          <a href={InformatiiPrecontractuale} download className="contracte">
            INFORMATII PRECONTRACTUALE
          </a>
        </p>
        <p>BREVET DE TURISM - BOURCEANU MARIUS LIVIU</p>
        <p>NO 8350 din 29.01.2004</p>
        <p>LICENTA TOUR OPERATOR NR 1388 DIN 07.03.2019</p>
        <p>
          <a href="http://www.anpc.ro" target="_blank" rel="noopener noreferrer">
            www.anpc.ro
          </a>
        </p>
        <p>Website realizat integral de Tabarna Andrei-Alexandru</p>
      </div>
      <div>
        <h3>Detalii contact</h3>
        <p>AGENTIA DE TURISM MARION TURISM</p>
        <p>Adresa: Bd. Stefan cel Mare si Sfant Nr. 4, Bl. GULIVER (intrarea cu fata inspre parc)</p>
        <p>Telefon: 0232-267.002 / 0232-258.103 (RDS)</p>
        <p>Whatsapp: 0731.757.149 (Vodafone)</p>
        <p>Email rezervări: rezervari@marion-turism.ro</p>
        <p>Program: Luni - Vineri 9.30 - 17 Sambata 10 - 14</p>
      </div>
    </footer>
  );
};

export default Footer;

