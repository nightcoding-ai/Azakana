import React from 'react';
import '../../App.css';
import Footer from '../Footer/Footer';
import Cookies from 'js-cookie';
import Mid from '../Body_statistiques/Mid';

class Statistiques extends React.Component {
  
  
  render(){
    return (
      <>
        <div className='statistiques' id='statistiques'>
          <Mid/>
        </div>
        <Footer/>
      </>
    )
  }
}

export default Statistiques;