import "../Register/Register.css";
import React, { Component } from 'react';
import "./Add_team.css";

class Add_team extends Component {
    

    render() {
        return (
            <div className="team">
            <div className='login'>
                <label className='label-form'>
                    Nom de l'équipe
                    <input type="text" name="team_name" className="input-form"/>
                </label>
                <button className='btn-team'>Créer une équipe</button>
            </div>
            </div>
        )
    }
}

export default Add_team;
