import axios from 'axios';
import React, { Component } from 'react';
import './Member.css';

let csrf_token = "";
const BASE_URL = 'http://127.0.0.1:8000/api/';//51.210.4.115:8000
const api_user = BASE_URL+'users/';
const api_members = BASE_URL+'members/';

export default class Member extends Component {
    componentDidMount() {
        axios.get("http://127.0.0.1:8000/api/csrf_token/")
        .then(res =>{
            csrf_token = res.data;
        })
    }

    addPlayer() {
        let pseudo = document.getElementById("input").value;
        axios.get(api_user+pseudo)
        .then(res => {
            let get_id = res.data;
            let user_id = get_id.id;
            let data = new FormData();
            data.append("user_id", user_id);
            data.append("team_name", document.getElementById('span').innerText);
            data.append("csrfmiddlewaretoken", csrf_token);
            axios.post("http://127.0.0.1:8000/api/add_player/", data)
            .then(response => {
                if(response.data){
                    console.log("Joueur ajouté");
                }
            })
            .catch(errors => console.log(errors))
        })
    }

    removePlayer(){
        console.log('bisous');
    }


   

    render() {
        return (
            <div className='team'>
                <div className='content'>
                <div id="teamname">
                    Equipe <span id="span">{this.props.team}</span>
                </div>
                
                <div id="teamChangerContent">
                    <input id="input" type="text" name="player"  placeholder="Nom du joueur"></input>
                    <br></br>
                    <button id="addPlayer"  onClick={this.addPlayer}>Ajouter joueur</button>
                    <button id="removePlayer" onClick={this.removePlayer}>Retirer joueur</button>
                <div id="message">
                    
                </div>
                </div>
                </div>
            </div>
        )
    }
}