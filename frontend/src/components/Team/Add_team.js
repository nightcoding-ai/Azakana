import "../Register/Register.css";
import "./Add_team.css";
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from "../Footer/Footer";
import axios from 'axios';
import Cookies from 'js-cookie';
let csrf_token = "";
let pseudo = Cookies.get('Pseudo');
let user_id = 0;
export default class Add_team extends Component {

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/api/csrf_token/")
        .then(res =>{
            csrf_token = res.data;
        })
        axios.get("http://127.0.0.1:8000/api/users/"+pseudo)
        .then(res => {
            let data = res.data;
            user_id = data.id;
        })
    }

    createTeam() {
        let data = new FormData();
        data.append("name", document.getElementById('team_name').value);
        data.append("user_id", user_id);
        data.append("csrfmiddlewaretoken", csrf_token);
        axios.post("http://127.0.0.1:8000/api/create_team/", data)
        .then(res => {
            if(res.data){
                window.location ='/team';
            }
        })
        .catch(errors => console.log(errors))
    }
    render() {
        return (
            <>
                <div className='team'>
                    <div className='login'>
                        <label className='label-form'>
                            Nom de l'équipe
                            <input type="text" name="team_name" className="input-form" id='team_name'></input>
                        </label>
                        <span id='error'></span>
                        <button className='btn-team' onClick={this.createTeam}>Créer une équipe</button>
                    </div>
                    <Link to='Join_team' className='btn-toggle'>
                        <button className='btn-team' to='/Join_team'>Rejoindre une équipe existante</button>
                    </Link>
                </div>
                <Footer/>
            </>
        )
    }
}
