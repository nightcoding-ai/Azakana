import React from 'react';
import '../../App.css';
import Footer from '../Footer/Footer';
import Offline from '../Offline/Offline';
import Cookies from 'js-cookie';

class Statistiques extends React.Component {
  state = {
    token: Cookies.get('Token'),
    pseudo: Cookies.get('Pseudo'),
  }

  render(){
    return (
      <>
        <div className='statistiques'>
        <Offline/>
        </div>
        <Footer/>
      </>
    )
  }
}

export default Statistiques;
