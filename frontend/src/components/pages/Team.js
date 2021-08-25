import React from 'react';
import '../../App.css';
import Footer from '../Footer/Footer';
import Cookies from 'js-cookie';
import Offline from '../Offline/Offline'
import axios from 'axios';
import Not_member from '../Team/Not_member';
import Member from '../Team/Member';

const BASE_URL = 'http://127.0.0.1:8000/api/';//51.210.4.115:8000
const api_user = BASE_URL+'users/';
const api_members = BASE_URL+'members/';
class Team extends React.Component {

  state = {
    pseudo: Cookies.get('Pseudo'),
    token: Cookies.get('Token'),
    team: "",
  }

  componentDidMount() {
    let user_id = 0;
    axios.get(api_user+this.state.pseudo)
    .then(res => {
      let data = res.data;
      user_id = data.id;
      axios.get(api_members+user_id)
      .then(res => {
        let team_name = res.data;
        this.setState({
          team: team_name
        })
      })
    })
  }

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