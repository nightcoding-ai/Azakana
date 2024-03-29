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
      this.setState({alert: <p id='alert'>Veuillez remplir tous les champs</p>})
    }else{
      if(this.state.credentials.password1 == this.state.credentials.password2){
        if(this.state.credentials.password1.length > 8){
          fetch('https://azakana.fr/api/rest-auth/registration/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.credentials),
          })
          .then( res => {
            if(res.ok){
              window.location='/sign-in';
            }
          })
          .catch( error => {
            this.setState({alert: <p id='alert'>Ce nom d'utilisateur ou adresse mail existe déjà</p>})
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
          Nom d'utilisateur
          <input type="text" name="username" className="input-form"
           value={this.state.credentials.user_name}
           onChange={this.inputChanged} />
        </label>
        <label className="label-form">
          Mot de passe
          <input type="password" name="password1" className="input-form"
           value={this.state.credentials.password1}
           onChange={this.inputChanged} />
        </label>
        <label className="label-form">
          Confirmation mot de passe
          <input type="password" name="password2" className="input-form"
           value={this.state.password2}
           onChange={this.inputChanged} />
        </label>
        <label className="label-form">
          Adresse email
          <input type="mail" name="email" className="input-form"
           value={this.state.credentials.email}
           onChange={this.inputChanged} />
        </label>
        {this.state.alert}
        <button className="button-save" onClick={this.register} to='/sign-in'>Enregistrer</button>
    </div>

  );
  }
}
export default Register;