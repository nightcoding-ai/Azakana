import React from 'react';
import '../../App.css';
import Login from '../Register/Login';
import Footer from '../Footer/Footer';

class SignIn extends React.Component {
  render(){
    return (
      <>
        <div className='sign-in'>
          <Login />
        </div>
        <Footer/>
      </>
    )
  }
}

export default SignIn;