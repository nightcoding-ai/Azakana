import React from 'react';
import '../../App.css';
import Footer from '../Footer/Footer';
import Stream from '../E-sport/Stream';

class E_Sport extends React.Component{
  render(){
    return (
      <>
        <Stream />
        <Footer />
      </>
    );
  }
}

export default E_Sport;