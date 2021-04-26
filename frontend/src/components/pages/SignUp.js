import React from 'react';
import '../../App.css';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';

class SignUp extends React.Component {
  render(){
    return (
      <>
        <body className='sign-up'>
          <Register />
        </body>      
        <Footer />
      </>
    )
  }
}

export default SignUp;