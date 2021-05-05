import React, { Component} from "react";
import "./Register.css";

class Register extends Component {
  state = {
    credentials: {username: '', password: '', mail: ''}
  }

  
  inputChanged = event => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
  }

  register = event => {
    fetch('http://127.0.0.1:8000/api/users/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        console.log(data.token);
      }
    )
    .catch( error => console.error(error))
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
        <label>
          Mail:
          <input type="mail" name="mail" className="form-control"
           value={this.state.credentials.mail}
           onChange={this.inputChanged} />
        </label>
        <br/>
        <button className="form-control" onClick={this.register}>Register</button>
    </div>
  );
  }
}
export default Register;