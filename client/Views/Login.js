import React, { useContext } from 'react';
import AuthTextEntry from '../Components/AuthTextEntry';
import { AuthContext } from './../Context/authContext';

const LoginView = () => {
  const { verifyLogin } = useContext(AuthContext);

  return (
    <div>
      Log In
      <AuthTextEntry onSubmit={verifyLogin} title="Log In" />
    </div>
  );
}

export default LoginView;