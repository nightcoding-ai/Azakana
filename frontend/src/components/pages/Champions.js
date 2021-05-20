import React from 'react';
import '../../App.css';
import Footer from '../Footer/Footer';
import Champ from '../Champion/Champion';

class Champions extends React.Component {
  

  render(){
    
    return (
      <>
        <div className='champions'>
        <Champ/>
        </div>
        <Footer/>
      </>
    )
  }
}

export default Champions;