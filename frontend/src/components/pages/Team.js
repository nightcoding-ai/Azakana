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
class Team extends React.Component {

  state = {
    pseudo: Cookies.get('Pseudo'),
    token: Cookies.get('Token'),
    team: "",
  }

  componentDidMount() {
    let team_id = String;

    axios.get(api_user+this.state.pseudo)
    .then(res => {
      team_id = (res.data.team).toString();
      if (team_id != null)
        axios.get(api_team+team_id)
        .then(res =>{
          team_name = res.data.name;
          this.setState({
            team: team_name
          });
        })
    })
  }


  render(){
    if (this.state.token) {
      if (this.state.team !== "") {
        return(
          <>
            <div className="team">
              Bienvenue {this.state.pseudo} !<br></br> 
              Membre de: {this.state.team}
            </div>
            <Footer/>
          </>
        )
      }else if (this.state.team === "") {
        return(
          <>
            <div className="team">
              <h3>
                Bienvenue dans la création d'équipe,<br></br>  
                {this.state.pseudo} ! Vous n'appartenez pas à une équipe
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