import React from 'react';
import '../../App.css';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';

class SignUp extends React.Component {
  render(){
    return (
      <>
        <div className='sign-up'>
          <Register />
        </div>
        <Footer />
      </>
    )
  }
}

export default SignUp;