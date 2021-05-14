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
    <div className="Login">
      <label>
          Username:
          <input type="text" name="username" className="form-control"
           value={this.state.credentials.username}
           onChange={this.inputChanged} />
        </label>
        <br/>
        <label>
          Password:
          <input type="password" name="password" className="form-control"
           value={this.state.credentials.password}
           onChange={this.inputChanged} />
        </label>
        <br/>
        <button className="form-control" onClick={this.login}>Login</button>
        
        <Link
                to='/sign-up'
          >
                <button className="form-control" >Register</button>
              </Link>
        
    </div>
  );
  }
}
export default Login;