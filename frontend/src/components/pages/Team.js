import React from 'react';
import '../../App.css';
import Footer from '../Footer/Footer';
import Cookies from 'js-cookie';

class Team extends React.Component {
  render(){
    return (
      <>
        <div className="team">Gestion d'équipe</div>
        <Footer/>
      </>
    )
  }
}
 export default Team;