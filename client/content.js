import React, { useState, useContext } from 'react';

import ListDisplayView from './Views/ListDisplay';
import LoginView from './Views/Login';
// import SignupView from './Views/Signup';
import NavBar from './Views/NavBar';

import { AuthContext } from './Context/authContext';

const Content = () => {
  console.log('app rerender');
  const { loginState } = useContext(AuthContext);
  const [state, setState] = useState(true);

  // look into react fragments? <> </>


  const loginOrSignUp = 
  // render different components depending on login status
  const child = loginState ? <ListDisplayView /> : <LoginView />

  return(
    <div>
      <NavBar />
      {child}
    </div>
  );
}

export default Content;