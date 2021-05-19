import React from 'react';

const verifyLogin = ({ username, password }) => {
  // fetch to server
  console.log('verify login fetch', { username, password });

  fetch('https:/localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password })
  })
    .then(data => {
      console.log('verifyLogin response', data);
      // update authState
      authState.loginState = !authState.loginState;
      // force refresh?
      return;
    })
    .catch(err => {
      console.log('ERROR: ', err);
    });
}

const authState = {
  loginState: false,
  userID: null,
  username: null,
  verifyLogin: verifyLogin,
}

const AuthContext = React.createContext(authState);

export default AuthContext;