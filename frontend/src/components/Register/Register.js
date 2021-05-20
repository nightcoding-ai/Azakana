import React, { Component} from "react";
import "./Register.css";
import { Link } from 'react-router-dom';

class Register extends Component {
  state = {
    credentials: {username: '',pseudo: '', password: '', mail: ''},
    cpassword: '',
    alert:'',
  }

  inputChanged = event => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
  }
  inputChangedCp = event => {
    this.setState({cpassword: event.target.value});
  }

  register = event => {
    if(this.state.credentials.password =='' || this.state.credentials.username ==''|| this.state.credentials.pseudo =='' || this.state.credentials.mail ==''){
      this.setState({alert: <p id='alert'>Veuillez remplir tout les champs</p>})
    }else{
      if(this.state.credentials.password == this.state.cpassword){
        fetch('http://127.0.0.1:8000/api/users/', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(this.state.credentials)
        })
        .catch( error => console.error(error))
      }else{
        this.setState({alert: <p id='alert'>Veuillez confirmer le mot de passe</p>})
      }
    }
  }

  render(){
  return (
    <div className="register">
      <label className="label-form">
          Username
          <input type="text" name="username" className="input-form"
           value={this.state.credentials.username}
           onChange={this.inputChanged} />
        </label>
        <br/>
        <label className="label-form">
          Pseudo Lol
          <input type="text" name="pseudo" className="input-form"
           value={this.state.credentials.pseudo}
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
        <label className="label-form">
          Confirm Password
          <input type="password" name="cpassword" className="input-form"
           value={this.state.cpassword}
           onChange={this.inputChangedCp} />
        </label>
        <br/>
        <label className="label-form">
          Mail
          <input type="mail" name="mail" className="input-form"
           value={this.state.credentials.mail}
           onChange={this.inputChanged} />
        </label>
        <br/>
        <button className="button-form" onClick={this.register} to='/sign-in'>Register</button>
        {this.state.alert}
    </div>
  );
  }
}
export default Register;