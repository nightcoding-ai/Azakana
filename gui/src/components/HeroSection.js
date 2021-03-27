import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/God King Garen Login Screen - League of Legends.mp4' autoPlay loop muted />
      <div className="search">
      <select className="servers">
        <option value="NA">NA</option>
        <option value="EUW">EUW</option>
        <option value="EUNA">EUNA</option>
        <option value="TU">TU</option>
        <option value="JP">JP</option>
        <option value="OC">OC</option>
      </select>

      <label for="summoner"></label>

      <input
        type="search"
        id="site-search"
        className="input"
        aria-label="Search through site content"
        placeholder='Ton pseudo'
      />

      <button className="Research">Rechercher</button>
    </div>
    </div>
  );
}

export default HeroSection;
