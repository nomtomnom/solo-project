import React, { useContext } from 'react';
import { AuthContext } from './../Context/AuthContext';
import AuthTextEntry from './../Components/AuthTextEntry';

const SignupView = () => {
  const { createAccount } = useContext(AuthContext);

  return (
    <div>
      <p>Sign Up</p>
      <AuthTextEntry onSubmit={createAccount} title="Sign Up" />
    </div>
  )
}

export default SignupView;