import React from 'react';
import '../../App.css';
import Login from '../Register/Login';

class SignIn extends React.Component {
  render(){
    return (
      <>
        <div className='sign-in'>
          <Login />
        </div>
      </>
    )
  }
}

export default SignIn;