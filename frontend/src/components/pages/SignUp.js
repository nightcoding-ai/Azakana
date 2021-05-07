import React from 'react';
import '../../App.css';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';

class SignUp extends React.Component {
  render(){
    return (
      <>
        <div className='sign-up'>
          <Register />
        </div>
        <Footer/>
      </>
    )
  }
}

export default SignUp;