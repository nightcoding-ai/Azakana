import React from 'react';
import '../../App.css';
import './Middle.css';
import video from '../../tempfiles/yone-fanart-login-screen-animation-loop-league-of-legends.mp4'
import axios from 'axios';


class Middle extends React.Component{

  handleClick(){
    let serveur = document.getElementById('servers').value;
    let nom = document.getElementById('summoner').value;
    alert(serveur + ' ' + nom);
  }

  componentDidMount() {
    const API_DEV = 'RGAPI-f3152855-bbb0-436d-b01a-820dbc756e84';
    axios.get(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Lamia%20Classy?api_key=`+API_DEV)
      .then(res => {
        console.log(res)
      })
  }
  

  render(){
    return (
      <div className='mid-container'>
        <video src={video} autoPlay loop muted/>
        <div className="search">
        <select id='servers' className="servers">
            <option value="EUW">EUW</option>
            <option value="NA">NA</option>
            <option value="EUNA">EUNA</option>
            <option value="TU">TU</option>
            <option value="JP">JP</option>
            <option value="OC">OC</option>
        </select>

        <input
            type="search"
            id="summoner"
            className="input"
            aria-label="Search through site content"
            placeholder='Ton pseudo'
           />

        <button onClick={this.handleClick} className="Research">Rechercher</button>
        </div>
    </div>
    );
  }
}

export default Middle;
