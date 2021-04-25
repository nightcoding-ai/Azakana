import React from 'react';
import '../../App.css';
import './Middle.css';
import video from '../../tempfiles/yone-fanart-login-screen-animation-loop-league-of-legends.mp4'
import axios from 'axios';

let data = Object;
let url = String;

class Middle extends React.Component{

  handleClick(){
    let servers = document.getElementById('servers').value;
    let summoner = document.getElementById('summoner').value;
    let section = document.getElementById('profile');
    const API_DEV = 'RGAPI-0d079bac-c38c-4ae7-a9ec-0e630a4369b5';
    axios.get(`https://`+servers+`.api.riotgames.com/lol/summoner/v4/summoners/by-name/`+summoner+`?api_key=`+API_DEV)
      .then(res => {
        //console.log(res);
        data = res.data;
        url = res.config.url;
        console.log(data, url);
        section.innerHTML = "<div id='Level' class='level_profile'>"+String(data.summonerLevel)+
        "</div><div id='summoner' class='summoner_profile'>"+String(data.name)+"</div><div id='stats' class='stats_profile'></div>";
      })
      .catch(error => {
        console.log(error.response)
      })
  }
  

  render(){
    return (
      <div className='mid-container'>
        <video src={video} autoPlay loop muted/>
        <div className="search">
            <select id='servers' className="servers">
                <option value="euw1">EUW</option>
                <option value="na1">NA</option>
                <option value="euna1">EUNA</option>
                <option value="tr1">TR</option>
                <option value="jp1">JP</option>
                <option value="oc1">OC</option>
                <option value="kr">KR</option>
                <option value="ru">RU</option>
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
        <div id='profile'></div>
      </div>
    );
  }
}

export default Middle;
