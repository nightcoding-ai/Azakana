import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Add_team from './Add_team';
import '../../App.css';

export default class Not_member extends Component {

    render() {
        return (
            <>
                <div className='team'>
                    <Link to='/Add_team'>
                        <button className='btn-team' to='/Add_team'>Créer une équipe</button>
                    </Link>
                    <Link to='Join_team'>
                        <button className='btn-team' to='/Join_team'>Rejoindre une équipe</button>
                    </Link>
                </div>
            </>
        )
    }
}
