import React from 'react';
import '../../App.css';
import Footer from '../Footer/Footer';
import Cookies from 'js-cookie';

class Statistiques extends React.Component {
  state = {
    token: Cookies.get('Token'),
    pseudo: Cookies.get('Pseudo'),
  }

  render(){
    return (
      <>
        <div className='statistiques'>Statistiques</div>
        <Footer/>
      </>
    )
  }
}

export default Statistiques;
