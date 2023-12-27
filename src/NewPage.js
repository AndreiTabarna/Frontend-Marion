import React from 'react';
import './NewPageStyles.css';
import image1 from './Images/iloveimg-upscaled/12.jpg';
import BackButton from './BackButton';

const NewPage = () => {
  return (
    <div className="NewPage">
    <div className="image-container">
    
        <img src={image1} alt="Imagine 12" className="image" />
        <div className="info-container">
        <p>Perioada: 4 aprilie – 7 aprilie 2024</p>
        <p>Tarif: 250 euro</p>
        <p>Telefon: 0232 – 267.002 / 0232 – 258.103 / 0731.757.149 (whatsapp)</p>
      </div>
   </div>
      <hr />
      <p className="title">4 aprilie 2024 || Iaşi – Russe</p>
      <p>
        Plecare din Iaşi la ora 0530 din parcarea Cinema Victoria, pe traseul Focşani – Buzău – Bucureşti (centură) – Giurgiu – Russe.
        Traversăm Dunărea, pe podul Prieteniei şi sosim în Russe, oraş fondat de împăratul roman Vespasian în perioada anilor 69-79 sub denumirea de Sexaginta Prista („Portul celor şaizeci de nave”).
        Vizităm Catedrala Ortodoxă „Sfȃnta Treime”, construită în anul 1632 şi admirăm cele mai importante obiective turistice. Opţional, croazieră pe Dunare (~1h).
        Cazare în Russe – hotel 4****.
      </p>


      <p className="title">5 aprilie 2024 || Basarabovo – Ivanovo – Arbanassi – Veliko Tarnovo</p>
      <p>
        Mic dejun. Oprire pe colinele de pe malul râului Lom, la Basarabovo, unde în secolul al XIII-lea, în timpul Imperiului Vlaho-Bulgar de la Târnovo, întemeiat de fraţii Petru şi Asan, s-a născut Sfântul Cuvios Dimitrie Basarabov, ocrotitorul Bucureştilor.
        Vom vizita Peştera Sfântului Dimitrie săpată în stâncă şi Mănăstirea Basarabov, ridicată de familia Basarabilor chiar înainte de întemeierea Ţării Româneşti. Satul, moşia şi mănăstirea i-au aparţinut lui Ioan Basarab I, primul domn al Ţării Româneşti. Continuăm spre complexul de biserici rupestre Ivanovo, faimos pentru bisericile săpate în piatră, plasate în cadrul unei rezervaţii, pe malurile rȃului Rusenski Lom.
        Complexul este remarcat pentru frescele sale medievale bine păstrate. Ȋn anul 1979, valorosul monument a intrat în Patrimoniul Mondial UNESCO. Apoi, ne oprim în satul Arbanasi. Amplasat pe un platou înalt între așezările Veliko Tarnovo și Gorna Oryahovitsa, satul Arbanasi oferă priveliști spectaculoase și exemple incredibile de arhitectură medievală datând de câteva secole.
        După-amiază sosim în Veliko Tarnovo, oraş ce găzduiește superba Cetate Tsaravets, cea mai puternică fortificație bulgară din Evul Mediu. Această fortăreață antică este acum o atracție turistică impresionantă, care se ridică mândră în vârful dealului Tsaravets. Timp liber la dispoziţia turiştilor.
        Cazare în Veliko Tarnovo – hotel 3***.
      </p>


      <p className="title">6 aprilie 2024 || Manastirea Dryanovo – Muzeul Etnografic Etar – Lovech – Peştera Devetashka – Cascadele Krushuna</p>
      <p>
        Mic dejun. Vizităm Mănăstirea Dryanovo ce poartă Hramul Sf. Arhanghel Mihai şi care a fost fondata în timpul celui de-al doilea Imperiu Bulgar. Continum cu Muzeul Etnografic Etar, situat într-un cadru natural deosebit. Sosim la Lovech, o localitate pitorească dominată de fortăreaţa construită acum circa 1000 de ani în urmă. Vom începe să explorăm cartierul vechi al orașului.
        Ne vom plimba pe străduțele pietruite și vom călători înapoi în timp, admirând casele tipice din secolul al XIX-lea. Vom acorda atenție faimosului Pod acoperit – o capodoperă a arhitecturii bulgare, construit de arhitectul Kolio Ficheto. Ne vom continua plimbarea spre Cetatea Hisarya, construită în timpul Primului Imperiu Bulgar (681-1018 d.Hr.). Cetatea este unul dintre cele mai vizitate obiective din Lovech.
        Vom face o plimbare în cartierul Varosha, ce include peste 160 de case restaurate şi care ajută la crearea unei atmosfere autentice care îi poartă pe turişti înapoi în acele zile din secolul al XIX-lea. Opţional, vom lua prânzul într-un restaurant tipic bulgăresc cu mâncare tradițională. După prȃnz, ne deplasăm spre Peştera Devetashka, o peşteră care ne va impresiona şi ne va copleşi cu măreţia ei. Se spune ca aceasta ar fi fost locuită de oameni încă din Paleolitic, acum 70.000 de ani.
        Călătoria continuă spre zona satului Krushuna, unde vom avea timp liber pentru vizitarea faimoaselor cascade din Parcul Natural Maarata.
        Cazare în zona Plevna – hotel 4****.
      </p>


      <p className="title">7 aprilie 2024 || Plevna – Iaşi</p>
      <p>
        Mic dejun. La Plevna a avut loc cea mai importanta bătălie din cadrul Războiului ruso-turc din 1877-1878, pentru eliberarea Bulgariei de sub jugul turcesc şi pentru independenţa de stat a Romȃniei. Asedierea Plevnei, de către armatele ruseşti şi romane, a durat 5 luni, iar capitularea cetăţii, în data de 28 noiembrie 1877, este asociată cu victoria şi cȃştigarea independenţei de stat a Romȃniei.
        Vizităm Muzeul Panorama, construit în anul 1977 – cu ocazia aniversării a 100 de ani de la eliberarea Plevnei. Pornim spre Iaşi, unde vom sosi în cursul serii, în funcţie de formalităţile vamale şi trafic.
      </p>

      <hr />

      <p className="title">Tariful include:</p>
      <ul>
        <li>Transport autocar, dotat cu aer condiţionat, scaune rabatabile, linie audio-video;</li>
        <li>Cazare 3 nopţi în hoteluri de 3***/4****, camere cu 2 paturi (la cerere 3 paturi), baie proprie, tv;</li>
        <li>3 mic dejun;</li>
        <li>Asistenţă turistică din partea agenţiei.</li>
      </ul>



      <hr />

      <p className="title">IMPORTANT:</p>
      <ul>
        <li>Tariful este valabil pentru un grup de minim 40 de persoane.</li>
        <li>Pentru un grup mai mic de 40 persoane, tariful se recalculează.</li>
        <li>Agenția Marion Turism poate schimba ordinea obiectivelor turistice și ordinea opționalelor din program, fără a afecta structura excursiei.</li>
      </ul>
      
      <hr />
      
      <BackButton />
    </div>
  );
};

export default NewPage;
