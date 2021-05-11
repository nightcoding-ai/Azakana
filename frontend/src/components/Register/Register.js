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
    <div className="register">
      <label className="label-form">
          Username
          <input type="text" name="username" className="input_form"
           value={this.state.credentials.username}
           onChange={this.inputChanged} />
        </label>
        <br/>
        <label className="label-form">
          Password
          <input type="password" name="password" className="input_form"
           value={this.state.credentials.password}
           onChange={this.inputChanged} />
        </label>
        <br/>
        <label className="label-form">
          Mail
          <input type="mail" name="mail" className="input_form"
           value={this.state.credentials.mail}
           onChange={this.inputChanged} />
        </label>
        <br/>
        <button className="button_form" onClick={this.register}>Register</button>
    </div>
  );
  }
}
export default Register;