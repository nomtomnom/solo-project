import React, { useContext } from 'react';
import AuthTextEntry from '../Components/AuthTextEntry';
import AuthContext from './../Context/authContext';

const LoginView = () => {
  const { verifyLogin } = useContext(AuthContext);


  const testLogin = ({ username, password }) => {
    console.log('stuff', { username, password });
    fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    }).then(data => {
        console.log('verifyLogin response', data);
        // update authState
        // force refresh?
      return data.json();
    }).then(data => {
        console.log('parsing?', data);
        return;
      }).catch(err => {
        console.log('ERROR: ', err);
      });
  }

  return (
    <div>
      <p>Login Field</p>
      <AuthTextEntry onSubmit={testLogin}/>
    </div>
  );
}

export default LoginView;