import React from 'react';
import '../../App.css';
import Middle from '../Body_home/Middle';

class Home extends React.Component{
  render(){
    return (
      <>
        <div>
        <Middle />
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
