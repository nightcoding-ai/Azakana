import React, { Component} from "react";
import "./Register.css";
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

class Login extends Component {
  state = {
    credentials: {username: '', password: ''}
  }

  login = event => {
    fetch('http://127.0.0.1:8000/auth/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        console.log(data.token);
        let tok ="token";
        if(data[tok]){
            Cookies.set("Token",data.token, { expires: 1 });
            document.location.href="/connected";
        }
        else{
           let error = document.getElementById('error');
           error.innerHTML="<p style='color:white'>Pseudo/mot de passe incorrect</p>";
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

  render(){
    return (
      <div>
           <div id="login" className="login">
              <label className="label-form">
                  Pseudo
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
                <label id='error' className='label-form'></label>
                <button id='button-form' className="button-form" onClick={this.login} >Connexion</button>
                <Link to='/sign-up'>
                    <button className="button-register"  to='/sign-up'>Inscription</button>
                </Link>
          </div>
      </div>
    );
  }
}
export default Login;