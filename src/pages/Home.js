import React from 'react';
import '../assets/styles/home.css';
import { Link } from 'react-router-dom';
import ReviewSlider from '../components/reviewSlider';
import piletina from '../assets/images/piletina.png'
import carbonara from '../assets/images/carbonara.png'
import plazma from '../assets/images/Plazma.png'

const Home = () => {
  // ... postojeći kod za popularJela
  const popularJela = [
    {
      id: 1,
      naziv: "Pohovana piletina",
      opis: "Sočni pileći file u zlatno-hrskavom pohu, serviran sa pomfritom",
      cijena: "13,00 KM",
      slika: piletina
    },
    {
      id: 2,
      naziv: "Carbonara",
      opis: "Savršeno al dente špagete u kremastom sosu od svježih jaja, pancete i parmezana",
      cijena: "10,00 KM",
      slika: carbonara
    },
    {
      id: 3,
      naziv: "Plazma palačinka",
      opis: "ekana domaća palačinka punjena Nutellom i plazma keksom",
      cijena: "8,00 KM",
      slika: plazma
    }
  ];

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-image">
          <div className="hero-text">
            <h1>Dobrodošli u Restoran Astoria</h1>
            <p className="pisani-tekst-home">Specijalizovani za pizze, palačinke i osmjeh na licima naših gostiju.</p>
            <Link to="/rezervacija" className="reservation-btn">Rezerviši Odmah</Link>
          </div>
        </div>
      </div>

      <div className="popular-section">
        <h2>Najpopularnija Jela</h2>
        <div className="popular-jela">
          {popularJela.map((jelo) => (
            <div key={jelo.id} className="jelo-kartica">
              <img src={jelo.slika} alt={jelo.naziv} />
              <h3>{jelo.naziv}</h3>
              <p>{jelo.opis}</p>
              <p className="cijena">{jelo.cijena}</p>
            </div>
          ))}
        </div>
        <Link to="/meni" className="menu-button">
          Pogledaj Kompletan Meni
        </Link>
      </div>

      <ReviewSlider />
    </div>
  );
};

export default Home;