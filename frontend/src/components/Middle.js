import React from 'react';
import '../App.css';
import './Middle.css';
import video from '../static/yone-fanart-login-screen-animation-loop-league-of-legends.mp4'

function Middle() {
  return (
      <div className='mid-container'>
        <video src={video} autoPlay loop muted/>
        <div className="search">
        <select className="servers">
            <option value="EUW">EUW</option>
            <option value="NA">NA</option>
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

        <button onClick={() => alert("trop bien django")} className="Research">Rechercher</button>
        </div>
    </div>
  );
}

export default Middle;
