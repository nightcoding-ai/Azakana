import "../Register/Register.css";
import React, { Component } from 'react';
import "./Join_team.css";

export default class Join_team extends Component {
    componentDidMount() {
        const apiTeams = 'http://127.0.0.1:8000/api/teams/';
        const apiUsers = 'http://127.0.0.1:8000/api/users/';


        fetch(apiUsers)
          .then((response) => response.json())
          .then((data) => {
            let Teams = [];
            let equipe = [];
            let compteur = 1;
            let affichage = document.getElementById("team");

            for(let k = 0; k < data.length; k ++){
                for(let i = 0; i < data.length; i ++){
                    if(data[i].team !== null){
                        if(data[i].team === compteur){
                            equipe.push(data[i].username);
                        
                            }
                    
                        }
            
                    }
                
                compteur ++;
                Teams.push(equipe);
                if(compteur !== compteur - 1){
                    equipe = [];
                }
                
            }
            
            
            for(let i = 0; i < Teams.length; i ++){
               let row = "<tr>";
               let td = "<td>";
                
                if(Teams[i].length > 0 && Teams[i].length < 5){
            
                    for(let j = 0; j <Teams[i].length; j++){
                        affichage.innerHTML += row + '<p>' +  Teams[i][j] + '</p><br>';
                       
                    }
                    affichage.innerHTML += "</tr>";
            
                }
            }
                  

              }
          );
      }
      render() {
        return (
            <div>
                <h1>Les équipes</h1>
                <div className="team">
                    <div id="team">

                    </div>
                    
                </div>
            </div>
        
        );
      }
}

