import React, { Component} from "react";
import "./Register.css";
import { Link } from 'react-router-dom';

class Register extends Component {
  state = {
    credentials: {username: '', password1: '',password2:'', email: ''},
    alert:'',
    erreur:false,
  }

  inputChanged = event => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
  }

  

  register = event => {
    if(this.state.credentials.password1 =='' || this.state.credentials.password2 =='' || this.state.credentials.username ==''|| this.state.credentials.email ==''){
      this.setState({alert: <p id='alert'>Veuillez remplir tout les champs</p>})
    }else{
      if(this.state.credentials.password1 == this.state.credentials.password2){
        if(this.state.credentials.password1.length > 8){
          fetch('http://127.0.0.1:8000/api/rest-auth/registration/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.credentials),
          })
          .catch( error => {
            console.error(error)
          })
          
        }else{
          this.setState({alert: <p id='alert'>Mot de passe trop court</p>})
        }
      }else{
        this.setState({alert: <p id='alert'>Veuillez confirmer le mot de passe</p>})
      }
    }
  }

  render(){
  return (
    <div className="register">
      <label className="label-form">
          Username League of Legend
          <input type="text" name="username" className="input-form"
           value={this.state.credentials.user_name}
           onChange={this.inputChanged} />
        </label>
        <br/>
        <label className="label-form">
          Password
          <input type="password" name="password1" className="input-form"
           value={this.state.credentials.password1}
           onChange={this.inputChanged} />
        </label>
        <br/>
        <label className="label-form">
          Confirm Password
          <input type="password" name="password2" className="input-form"
           value={this.state.password2}
           onChange={this.inputChanged} />
        </label>
        <br/>
        <label className="label-form">
          Mail
          <input type="mail" name="email" className="input-form"
           value={this.state.credentials.email}
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