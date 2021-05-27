import React from 'react';
import '../../App.css';
import Footer from '../Footer/Footer';
import Cookies from 'js-cookie';
import Offline from '../Offline/Offline'

class Team extends React.Component {

  state = {
    pseudo: Cookies.get('Pseudo'),
    token: Cookies.get('Token'),
  }

  render(){
    /*
    return(
      <div className="team">{this.state.token}</div>
    )*/
    if (this.state.token) {
      return(
        <>
          <div className="team">
            Vous êtes connecté.{"\n"}
            Bienvenue dans la création d'équipe,  {this.state.pseudo} !
          </div>
          <Footer/>
        </>
      )
    }else{
      return (
        <>
          <div className="team"><Offline/></div>
          <Footer/>
        </>
      )
    }
  }
}
 export default Team;