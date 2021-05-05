import React from 'react';
import '../../App.css';
import Register from '../Register/Register';

class SignUp extends React.Component {
  render(){
    return (
      <>
        <div className='sign-up'>
          <Register />
        </div>
      </>
    )
  }
}

export default SignUp;