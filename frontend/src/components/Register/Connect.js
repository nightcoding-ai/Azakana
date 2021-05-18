import React, { Component} from "react";
import "./Register.css";
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

class Connect extends Component {
  disconnect = event => {
    Cookies.remove('Token');
  }

  render(){
    return (
    <div id="connect" className="connect">
        <Link to='/sign-in'>
                    <button className="button-disconnect"  to='/sign-in' onClick={this.disconnect}>Se déconnecter</button>
        </Link>
    </div>
    );
  }
}
export default Connect;