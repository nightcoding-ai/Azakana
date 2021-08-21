import "../Register/Register.css";
import "./Add_team.css";
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from "../Footer/Footer";

export default class Add_team extends Component {
    createTeam() {
        alert("ntm");
    }
    render() {
        return (
            <>
                <div className='team'>
                    <div className='login'>
                        <label className='label-form'>
                            Nom de l'équipe
                            <input type="text" name="team_name" className="input-form"></input>
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
