import React from 'react';
import '../../App.css';
import Footer from '../Footer/Footer';
import Cookies from 'js-cookie';
import Stat from '../Stats/Stat';

class Statistiques extends React.Component {
  
  
  render(){
    return (
      <>
        <div className='statistiques'>
          <Stat/>
        </div>
        <Footer/>
      </>
    )
  }
}

export default Statistiques;