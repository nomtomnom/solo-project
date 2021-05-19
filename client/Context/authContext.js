import React from 'react';

const authState = {
  login: false,
  userID: null,
  username: null
}

const AuthContext = React.createContext(authState);

export default AuthContext;