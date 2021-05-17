import React from 'react';
import '../../App.css';
import Connect from '../Register/Connect';
import Footer from '../Footer/Footer';

class Connected extends React.Component {
  render(){
    return (
      <>
        <div className='connected'>
          <Connect/>
        </div>
        <Footer/>
      </>
    )
  }
}

export default Connected;