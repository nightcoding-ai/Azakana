import React, { Component} from "react";
import "./Register.css";
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

class Login extends Component {
  state = {
    credentials: {username: '', password: ''},
    token: Cookies.get('Token'),
  }

  login = event => {
    fetch('https://azakana.fr/api/rest-auth/login/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        let tok ="key";
        let pseudo = (this.state.credentials.username).toString();
        if(data[tok]){
            Cookies.set("Token",data.key, { expires: 1 });
            Cookies.set("Pseudo",pseudo, { expires: 1 });
            document.location.href="/connected";
        }
        else{
           let error = document.getElementById('error');
           error.innerHTML="<h3 id='incorrect'>Pseudo/mot de passe incorrect</h3>";
        }
      }
    )
    .catch( error => console.error(error))
  }
  inputChanged = event => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
  }
  connect = () => {
    if (typeof(this.state.token) != 'undefined') {
      document.location.href="/";
    }
  }

  render(){
    return (
           <div id="login" className="login">
              <label className="label-form">
                  Nom d'utilisateur
                  <input type="text" name="username" className="input-form"
                   value={this.state.credentials.username}
                   onChange={this.inputChanged} />
                </label>
                <br/>
                <label className="label-form">
                  Mot de passe
                  <input type="password" name="password" className="input-form" id="mdp"
                   value={this.state.credentials.password}
                   onChange={this.inputChanged} />
                </label>
                <label id='error'></label>
                <button id='button-form' className="button-form" onClick={this.login} >Connexion</button>
                <Link to='/sign-up'>
                    <button className="button-register"  to='/sign-up'>Inscription</button>
                </Link>
          </div>
    );
  }
}
export default Login;