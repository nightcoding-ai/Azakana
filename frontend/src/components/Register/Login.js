import React, { Component} from "react";
import "./Register.css";
import { Link } from 'react-router-dom';

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
        console.log(data);
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
    <div className="login">
      <label className="label-form">
          Username
          <input type="text" name="username" className="input-form"
           value={this.state.credentials.username}
           onChange={this.inputChanged} />
        </label>
        <br/>
        <label className="label-form">
          Password
          <input type="password" name="password" className="input-form"
           value={this.state.credentials.password}
           onChange={this.inputChanged} />
        </label>
        <br/>
        <button className="button-form" onClick={this.login}>Login</button>

        <Link to='/sign-up'>
                <button className="button-register"  to='/sign-up'>Register</button>
        </Link>

    </div>
  );
  }
}
export default Login;