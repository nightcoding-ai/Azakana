import "../Register/Register.css";
import "./Add_team.css";
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from "../Footer/Footer";

export default class Join_team extends Component {

    render() {
        return (
            <>
                <div className='team'>
                    <div className='login'>
                        <label className='label-form'>
                            Nom de l'équipe
                            <input type="text" name="team_name" className="input-form"></input>
                        </label>
                        <button className='btn-team' onClick={this.createTeam}>Créer une équipe</button>
                    </div>
                    <div>
                        <Link to='Add_team' className="btn-toggle">
                            <button className='btn-team' to='/Add_team'>Créer sa propre équipe</button>
                        </Link>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}
