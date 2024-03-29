import "./Add_team.css";
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from "../Footer/Footer";
import axios from "axios";
import Cookies from 'js-cookie';
import { checkPropTypes } from "prop-types";

let teams_name = [];
let pseudo = Cookies.get('Pseudo');
const BASE_URL = 'https://azakana.fr/api/';//51.210.4.115:8000
const api_user = BASE_URL+'users/';
let user_id = 0;
let csrf_token = "";

export default class Join_team extends Component {

    componentDidMount() {
        axios.get(BASE_URL+"/csrf_token/")
        .then(res =>{
            csrf_token = res.data;
        })
        axios.get(BASE_URL+"/teams/")
        .then(response =>{
            let data = response.data;
    
            for(let i = 0 ; i < data.length; i++){
                teams_name.push(data[i].name);
            }
           
            
      
        })
        axios.get(BASE_URL+"/users/"+pseudo)
        .then(res => {
            let data = res.data;
            user_id = data.id;
        })


    }

    joinTeam(){
        console.log('in development');

    }


    render() {
        const teams = teams_name;

        const items = [];
        


        for(const [index, value] of teams.entries()){
            items.push(<li key={index} id="listeElement">{value}<button id="buttonJoin" onClick={this.joinTeam}>Rejoindre</button></li>);
        }



        return (
            <>
                <div className='team'>
                    <div className='contentTeams'>
                        Les équipes
                    <ul id="listEquipes">
                        {items}

                    </ul>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}
