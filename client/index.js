import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import DisplayView from './Views/Display';
import LoginView from './Views/Login';
// import SignupView from './Views/Signup';
import NavBar from './Components/NavBar';

import AuthContext from './Context/authContext';

function App() {
  console.log('app rerender');
  const { loginState, userID, username, verifyLogin } = AuthContext._currentValue;
  const [localLogin, setLocalLogin] = useState(loginState);


  useEffect(() => {
    console.log('App rerender from useEffect')
  }, [loginState]);

  // render components depending on login status
  const child = localLogin ? <DisplayView /> : <LoginView />

  return (
    <div>
      <AuthContext.Provider value={{ loginState, userID, username, verifyLogin }}>
        <NavBar />
        {child}
        <button onClick={() => setLocalLogin(!localLogin)}>
          Manual Login Toggle
        </button>
      </AuthContext.Provider>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));