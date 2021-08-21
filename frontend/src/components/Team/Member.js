import React, { Component } from 'react'
import '../../App.css';

export default class Member extends Component {
    render() {
        return (
            <div className='team'>
                Membre de : {this.props.team}
            </div>
        )
    }
}
