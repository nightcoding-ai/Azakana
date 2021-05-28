import React from 'react';
import '../../App.css';
import Footer from '../Footer/Footer';
import Cookies from 'js-cookie';
import Offline from '../Offline/Offline'
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api/'//51.210.4.115:8000
const api_user = BASE_URL+'users/'
const api_team = BASE_URL+'teams/'

let team_name = String;
let team_id = Number;
let membres = [];
class Team extends React.Component {

  state = {
    pseudo: Cookies.get('Pseudo'),
    token: Cookies.get('Token'),
    team: "",
  }

  componentDidMount() {
    axios.get(api_user+this.state.pseudo)
    .then(res => {
      team_id = res.data.team;
      if (team_id != null)
        axios.get(api_team+team_id.toString())
        .then(res =>{
          team_name = res.data.name;
          this.setState({
            team: team_name
          });
        })
    })
  }

  handleClick() {
    axios.get(api_user)
    .then(res =>{
      let data = res.data;
      for(let i=0; i<data.length;i++){
        if(data[i].team == team_id){
          membres.push(data[i].username);
        }
      }
    })
    for(let j=0;j<membres.length;j++){
      document.getElementById('team').innerHTML += membres[j] + "<br>";
    }
  }

  createTeam(){
    let create_html = '<label className="label-form">Choisissez un nom d\'équipe:<input type="text" name="team_name" /></label><button className="button-save">Enregistrer</button>'
    document.getElementById('team').innerHTML = create_html;
  }

  joinTeam(){

  }

  render(){
    if (this.state.token) {
      if (this.state.team !== "") {
        return(
          <>
            <div className="team" id="team">
              Bienvenue {this.state.pseudo} !<br></br> 
              Membre de: {this.state.team}
              <br></br>
              <button className='btn-patch' onClick={this.handleClick}>Afficher les membres</button>
              <br></br>
            </div>
            <Footer/>
          </>
        )
      }else if (this.state.team === "") {
        return(
          <>
            <div className="team" id="team">
              <h3>
                Bienvenue dans la création d'équipe,<br></br>  
                {this.state.pseudo} ! Vous n'appartenez pas encore à une équipe.
                <br></br>
                <button className='btn-patch' onClick={this.createTeam}>Créer une équipe</button>
                <br></br>
                <button className='btn-patch' onClick={this.joinTeam}>Rejoindre une équipe</button>
              </h3>
            </div>
            <Footer/>
          </>
        )
      }
    }else{
      return (
        <>
          <div className="team" id="team"><Offline/></div>
          <Footer/>
        </>
      )
    }
  }
}
 export default Team;