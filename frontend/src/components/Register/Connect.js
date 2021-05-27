import React, { Component} from "react";
import "./Register.css";
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

class Connect extends Component {
  disconnect = event => {
    Cookies.remove('Token');
    Cookies.remove('Pseudo');
  }

  render(){
    return (
    <div id="connect" className="connect">
        <label className='label-form'>Vous êtes connecté</label>
        <h3>Maintenant que vous êtes connecté, vous avez accès à la page statistiques et la page équipe.</h3>
        <Link to='/sign-in'>
                    <button className="button-disconnect"  to='/sign-in' onClick={this.disconnect}>Déconnexion</button>
        </Link>
    </div>
    );
  }
}
export default Connect;