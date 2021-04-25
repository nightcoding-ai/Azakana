import React from 'react';
import '../../App.css';
import Register from '../Register/Register';


class SignUp extends React.Component {
  render(){
    return (
      <>
        <body className='sign-up'>
          <Register />
        </body>
      </>
    )
  }
}

export default SignUp;