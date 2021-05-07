import React from 'react';
import '../../App.css';
import './Middle.css';
import video from '../../tempfiles/yone-fanart-login-screen-animation-loop-league-of-legends.mp4'
import axios from 'axios';

let data = Object;
class Middle extends React.Component{

  handleClick(){
    let server_selected = document.getElementById('servers').value;
    let summoner = document.getElementById('summoner').value;
    let section = document.getElementById('profile');
    let summonerId = String;
    const RiotSummoner = '.api.riotgames.com/lol/summoner/v4/summoners/by-name/';
    const RiotFlex = ".api.riotgames.com/lol/league/v4/entries/by-summoner/";
    const API_DEV = 'api_key=RGAPI-ea671648-8772-4441-bac2-1a013b40a0ff';
    const RiotHistory = ".api.riotgames.com/lol/match/v5/matches/by-puuid/";
    const RiotHistoryDetails = ".api.riotgames.com/lol/match/v4/matches/";
    const RiotMastery = '.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/';
    let summonerPuuid = String;
    let history = [];
    let idGames = [];
    let infoGame = "";
    let champName = "";


    axios.get(`https://`+server_selected+RiotSummoner+summoner+'?'+API_DEV)
      .then(res => {
        data = res.data;
        summonerId = res.data.id;
        summonerPuuid = res.data.puuid;
        summoner = res.data.name;
        section.innerHTML = "<div id='Level' class='level'>"+String(data.summonerLevel)+
        "</div><div id='summoner_name' class='summoner_name'>"+String(data.name)+"</div><div id='stats' class='stats'></div>";
        //return axios.get(`https://`+server_selected+RiotMastery+summonerId+API_DEV);
        return axios.get(`https://`+server_selected+RiotFlex+summonerId+'?'+API_DEV);
        })
      .then(res => {    //requête pour récupérer taux de victoire des parties classées
        data = res.data;
        const stats = document.getElementById('stats');
        for (let i = 0; i < data.length; i++) {
          if(data[i].queueType === "RANKED_SOLO_5x5"){
            stats.innerHTML += "Rang Solo/Duo: " + data[i].tier + " " + data[i].rank + "<br>";
            stats.innerHTML += "Pourcentage de victoire: "+ Math.round(data[i].wins/(data[i].wins+data[i].losses)*100)+"%<br>";
            stats.innerHTML += "Victoires:"+ String(data[i].wins) + " /Défaites: " + String(data[i].losses)+"<br>";
          }
          if (data[i].queueType === "RANKED_FLEX_SR"){
            stats.innerHTML += "Rang Flex: " + data[i].tier + " " + data[i].rank + "<br>";
            stats.innerHTML += "Pourcentage de victoire: "+ Math.round(data[i].wins/(data[i].wins+data[i].losses)*100)+"%<br>";
            stats.innerHTML += "Victoires:"+ String(data[i].wins) + " /Défaites: " + String(data[i].losses)+"<br>";
          }

          stats.innerHTML += "<br>";
        }
        return axios.get(`https://`+server_selected+RiotMastery+summonerId+ "?" + API_DEV);
        })
      .then( res => {   //requête points de maitrise champions
        const stats = document.getElementById('stats');
        stats.innerHTML += "<H3>Top 3 des champions les plus joués :</H3>"
        for (let i = 0; i < 3; i++) {
          stats.innerHTML += "ID du champion : " + String(res.data[i].championId) +", points de maitrise : "+ String(res.data[i].championPoints) +"<br>";

        }
        stats.innerHTML += "<br>";
        return axios.get(`https://europe`+RiotHistory+summonerPuuid+'/ids?start=0&count=10&'+API_DEV)
        })
      .then(res => {    //requête pour remplir tableau history avec les id de parties
        history = res.data;
        for(let k = 0; k < history.length; k ++){
          idGames.push(history[k].slice(5));
        }
        for(let l = 0; l < idGames.length; l ++){
          axios.get(`https://`+ server_selected + RiotHistoryDetails + idGames[l] + "?" + API_DEV)
            .then(res => {
              infoGame = res.data;
              const stats = document.getElementById('stats');
              stats.innerHTML += "<br>";
              stats.innerHTML += infoGame.gameMode;
              let min = Math.floor(infoGame.gameDuration / 60);
              let sec = infoGame.gameDuration % 60;
              if(sec < 10){
                stats.innerHTML += " " + min + ":0" + sec;
              }
              else{
                  stats.innerHTML += " " + min + ":" + sec;

              }
              for(let i = 0; i < infoGame.participantIdentities.length; i ++){
                if(infoGame.participantIdentities[i].player.summonerName === summoner){
                  if(infoGame.participants[i].stats.win === true){
                    stats.innerHTML += " Victoire" + "<br>";
                  }else{
                    stats.innerHTML += " Défaite" + "<br>";

                  }
                  stats.innerHTML += '<img src="http://ddragon.leagueoflegends.com/cdn/11.9.1/img/champion/Aatrox.png">';
                  stats.innerHTML += infoGame.participants[i].stats.kills + "/"
                                  + infoGame.participants[i].stats.deaths + "/"
                                  + infoGame.participants[i].stats.assists + "<br>";

                }
              }

            })
          }
        })
      .catch(error => {
        section.innerHTML = "<div id='stats' class='stats'>Cet utilisateur n'existe pas.<br>Veuillez vérifier le pseudo et/ou le serveur.</div>";
      })
    }


  render(){
    return (
      <div id='mid' className='mid-container'>
        <video src={video} autoPlay loop muted/>
        <div className="search" id="search">
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

            <button onClick={this.handleClick}  className="research">Rechercher</button>
        </div>
        <div id='profile' className='profile'></div>
      </div>
    );
  }
}

export default Middle;
