import React, { useContext } from 'react';
import AuthTextEntry from '../Components/AuthTextEntry';
import { AuthContext } from './../Context/authContext';

const LoginView = () => {
  const { verifyLogin } = useContext(AuthContext);

  return (
    <div>
      <p>Login Field</p>
      <AuthTextEntry onSubmit={verifyLogin}/>
    </div>
  );
}

export default LoginView;