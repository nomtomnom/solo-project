import React, { useContext } from 'react';

import ListDisplayView from './Views/ListDisplay';
import LoginView from './Views/Login';
import SignUpView from './Views/SignUp';
import NavBar from './Views/NavBar';

import { AuthContext } from './Context/authContext';

const Content = () => {
  console.log('app rerender');
  const { loginState, signUpState } = useContext(AuthContext);

  console.log('sign up state in content', signUpState);
  console.log('login state in content', loginState);
  // render different components depending on login status
  const signUpChild = signUpState ? <SignUpView /> : <LoginView />;
  const child = loginState
    ? <ListDisplayView />
    : signUpChild;

  return(
    <div>
      <NavBar />
      {child}
    </div>
  );
}

export default Content;