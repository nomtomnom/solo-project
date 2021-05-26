import React, { useState } from 'react';

const defaultContext = {
  loginState: false,
  userID: null,
  username: null,
  signUpState: true,
  signUp: () => { },
  verifyLogin: () => { },
  logoutFunc: () => { },
  toggleSignUp: () => { },
}

export const AuthContext = React.createContext(defaultContext);

const AuthContextProvider = (props) => {
  // functions
  const verifyLogin = ({ username, password }) => {
    // fetch to server
    console.log('verify login fetch', { username, password });
  
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({ username, password })
    })
      .then(data => {
        console.log('verifyLogin response', data);
        return data.json();
      })
      .then(data => {
        if (data.name && data.id) {
          // update authState should trigger refresh
          setState({
            ...state,
            userID: data.id,
            username: data.name,
            loginState: true
          });
        } else {
          setState({
            ...state,
            loginState: false
          })
        }
      })
      .catch(err => {
        console.log('ERROR: ', err);
      });
  }

  const signUp = ({ username, password }) => {
    console.log('creating account');

    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({ username, password })
    })
      .then(data => {
        return data.json()
      })
      .then(data => {
        console.log(data);
        setState({
          ...state,
          userID: data.id,
        })
      })
      .catch(err => console.log('CREATE ACCOUNT ERROR', err));
  }

  const logoutFunc = () => {
    setState({
      ...state,
      loginState: false,
      username: null,
      userID: null
    })
  }

  const toggleSignUp = () => {
    console.log('changing signUpState', state.signUpState);
    
    const newState = !state.signUpState;

    setState({
      ...state,
      signUpState: newState,
    });
  }

  // init state
  const initState = {
    ...defaultContext,
    verifyLogin: verifyLogin,
    logoutFunc: logoutFunc,
    toggleSignUp: toggleSignUp,
    signUp: signUp,
  };

  const [state, setState] = useState(initState);

  return (
    <>
      <AuthContext.Provider value={state}>
        {props.children}
      </AuthContext.Provider>
      <button onClick={() => {
        console.log('manual login toggle: prior state:', state.loginState);
        setState({
          ...state,
          loginState: !state.loginState,
        });
      }
      }>
        Manual Login Toggle
      </button>
    </>
  );
}


export default AuthContextProvider;