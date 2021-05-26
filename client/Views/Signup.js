import React, { useContext } from 'react';
import AuthTextEntry from '../Components/AuthTextEntry';
import { AuthContext } from '../Context/AuthContext';

const SignUpView = () => {
  const { signUp } = useContext(AuthContext);

  return (
    <>
      Sign Up
      <AuthTextEntry onSubmit={signUp} title="Sign Up" />
    </>
  );
}

export default SignUpView;