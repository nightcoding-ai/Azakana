import "../Register/Register.css";
import React, { Component } from 'react'

export default class Join_team extends Component {
    createTeam() {
        alert("ntm");
    }
    render() {
        return (
            <div className='login'>
                <label className='label-form'>
                    Nom de l'équipe
                    <input type="text" name="team_name" className="input-form"></input>
                </label>
                <button className='btn-team' onClick={this.createTeam}>Créer une équipe</button>
            </div>
        )
    }
}
