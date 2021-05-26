import React, { useContext } from 'react';
import AuthTextEntry from '../Components/AuthTextEntry';
import { AuthContext } from '../Context/AuthContext';

const LoginView = () => {
  const { verifyLogin } = useContext(AuthContext);

  return (
    <>
      Log In
      <AuthTextEntry onSubmit={verifyLogin} title="Log In" />
    </>
  );
}

export default LoginView;