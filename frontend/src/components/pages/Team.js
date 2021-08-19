import React from 'react';
import '../../App.css';
import Footer from '../Footer/Footer';
import Cookies from 'js-cookie';
import Offline from '../Offline/Offline'
import axios from 'axios';
import Not_member from '../Team/Not_member';
import Member from '../Team/Member';

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
/*
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
*/
  

  render(){
    if (this.state.token) {
      if (this.state.team !== "") {
        return(
          <>
            <Member team={this.state.team}/>
            <Footer/>
          </>
        )
      }else if (this.state.team === "") {
        return(
          <>
            <Not_member/>
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