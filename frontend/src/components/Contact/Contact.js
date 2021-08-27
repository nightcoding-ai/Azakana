import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import './Contact.css';

const BASE_URL = 'http://azakana.fr/api/'
let csrf_token = "";

class Contact extends React.Component{
    componentDidMount() {
        axios.get(BASE_URL+"csrf_token/")
        .then(res =>{
            csrf_token = res.data;
        })
    }

    state = {
        credentials: {name: '', email: '', subject: ''},
        alert:'',
        erreur:false,
      
    }
    
      inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});
      }
    
      
    
    sendMessage() {
        let data = new FormData();
        data.append("name", document.getElementById('name').value);
        data.append("email", document.getElementById('email').value);
        data.append("subject", document.getElementById('subject').value);
        data.append("csrfmiddlewaretoken", csrf_token);
        axios.post(BASE_URL+"contact/", data)
        .then(res => {
            if(res.data){
                window.location ='/contact';
            }
        })
        .catch(errors => console.log(errors))
    
    }
      
    
      render(){
      return (
          <>
          <body>
        <div className="team">

          <form id="formulaire">
          <label className="label-form">
              Nom<br />
              <input type="text" name="name" className="input-form" id="name" placeholder="Votre nom..."
               value={this.state.credentials.name}
               onChange={this.inputChanged} />
            </label>
            <label className="label-form"><br />
              Email<br />
              <input type="email" name="email" className="input-form" id="email" placeholder="Votre adresse email..."
               value={this.state.credentials.email}
               onChange={this.inputChanged} />
            </label>
            <label className="label-form"><br />
              Message<br />
              <input type="text" name="subject" className="input-form" id="subject" placeholder="Votre message..."
               value={this.state.subject}
               onChange={this.inputChanged} /><br />
            </label>
            {this.state.alert}
            <button className="button-save" onClick={this.sendMessage} to='/contact'>Envoyer</button>
            </form>
        </div>
        </body>
        <Footer />
        </>
        )
    }

}

export default Contact;