import React from 'react';
import '../../App.css';
import './Middle.css';
import video from '../../tempfiles/God King Garen Login Screen - League of Legends.mp4'
import axios from 'axios';
import Cookies from 'js-cookie';

let data = Object;
class Middle extends React.Component{

  handleClick(){
    let server_selected = document.getElementById('servers').value;
    console.log(server_selected)
    let summoner = document.getElementById('summoner').value;
    console.log(summoner)
    let section = document.getElementById('profile');
    let summonerId = String;
    let summonerPuuid = String;
    let history = [];
    let idGames = []; 
    let infoGame = "";
    const api_Django = 'http://127.0.0.1:8000/api/'//51.210.4.115


    axios.get(api_Django+'profile/'+server_selected+'/'+summoner)
      .then(res => {
        data = res.data;
        summonerId = data.id;
        summonerPuuid = data.puuid;
            console.log(data, summonerId);
        section.innerHTML = "<div id='Level' class='level'>"+String(data.summonerLevel)+
        "</div><div id='summoner_name' class='summoner_name'>"+String(data.name)+"</div><div id='stats' class='stats'></div>";
        //return axios.get(`https://`+server_selected+RiotMastery+summonerId+API_DEV);
        return axios.get(api_Django+'ranks/'+server_selected+'/'+summonerId);
        })
      .then(res => {
        data = res.data;

        const stats = document.getElementById('stats');
        for (let i = 0; i < data.length; i++) {
          if(data[i].queueType === "RANKED_SOLO_5x5"){
            stats.innerHTML +=
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
        return axios.get(api_Django+'masteries/'+server_selected+'/'+summonerId);
      })
      .then( res => {
        const stats = document.getElementById('stats');
        //console.log(res.data);
        stats.innerHTML += "<H3>Top 3 des champions les plus joués :</H3>"
        for (let i = 0; i < 3; i++) {
          stats.innerHTML += "id du champion : " + String(res.data[i].championId) +", points de maitrise : "+ String(res.data[i].championPoints) +"<br>";
        }
        stats.innerHTML += "<br>";
        return axios.get(api_Django+'history/europe/'+summonerPuuid);
      })
      .then(res => {    //requête pour remplir tableau history avec les id de parties
        history = res.data;
        //console.log(history);
        for(let k = 0; k < history.length; k ++){
          idGames.push(history[k].slice(5));
        }
        for(let l = 0; l < idGames.length; l ++){
          axios.get(api_Django +'details/'+ server_selected +'/'+ idGames[l])
            .then(res => {
              infoGame = res.data;
              //console.log(infoGame);
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
                  stats.innerHTML += infoGame.participants[i].stats.kills + "/"
                                  + infoGame.participants[i].stats.deaths + "/"
                                  + infoGame.participants[i].stats.assists + "<br>";
                }
              }
            })
        }
      })
      .catch(error => {
        console.log(error.response);
        section.innerHTML = "<div id='stats' class='inexistant'>Cet utilisateur n'existe pas.<br>Veuillez vérifier le pseudo et/ou le serveur.</div>";
      })
    }
  
  

  render(){
    return (
      <div className='mid-container'>
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

            <button onClick={this.handleClick} className="research">Rechercher</button>
        </div>
        <div id='profile' className='profile'></div>
      </div>
    );
  }
}
export default Middle;
