import React, { useContext } from 'react';

import DisplayView from './Views/Display';
import LoginView from './Views/Login';
// import SignupView from './Views/Signup';
import NavBar from './Components/NavBar';

import { AuthContext } from './Context/authContext';

const Content = () => {
  console.log('app rerender');
  const { loginState } = useContext(AuthContext);


  // render components depending on login status
  const child = loginState ? <DisplayView /> : <LoginView />

  // const updated = username ? 'Updated & Refreshed!' : null;

  return(
    <div>
      <NavBar />
      {child}
    </div>
  );
}

export default Content;