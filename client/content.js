import React, { useContext } from 'react';

import ListDisplayView from './Views/ListDisplay';
import LoginView from './Views/Login';
import SignUpView from './Views/SignUp';
import NavBar from './Views/NavBar';

import { AuthContext } from './Context/AuthContext';
import ListContextProvider from './Context/ListContext';

const Content = () => {
  const { loginState, signUpState } = useContext(AuthContext);

  // render different components depending on login status
  const signUpChild = signUpState ? <SignUpView /> : <LoginView />;
  const child = loginState
    ? <ListDisplayView />
    : signUpChild;

  return(
    <div>
      <NavBar />
      <ListContextProvider>
        {child}
      </ListContextProvider>
    </div>
  );
}

export default Content;