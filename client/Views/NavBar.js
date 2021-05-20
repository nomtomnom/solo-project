import React, { useContext } from 'react';
import { AuthContext } from '../Context/authContext';

function NavBar() {
  const { loginState,
    username,
    logout,
    signUpState,
    toggleSignUp
  } = useContext(AuthContext);

  console.log('sign up state in navbar', signUpState);
  // SHOW WHEN SIGNED IN
  const logoutButton = <button className="dangerous" onClick={logout}>LOG OUT</button>;

  // SHOW ON SIGN UP PAGE / LOG IN PAGE
  const buttonText = signUpState
    ? 'LOG IN'
    : 'SIGN UP';
  
  return (
    <div className="container">
      <p>
        <span>NavBar</span>
        <span>{loginState ? `~~~ Hi, ${username}! ~~~` : null}</span>
        <span>{loginState
          ? logoutButton
          : <button onClick={toggleSignUp}>{buttonText}</button>}</span>
      </p>
    </div>
  );
}

export default NavBar;