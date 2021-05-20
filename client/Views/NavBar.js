import React, { useState, useContext } from 'react';
import { AuthContext } from '../Context/authContext';

function NavBar() {
  const { loginState, username, logout } = useContext(AuthContext);

  const tempFunc = () => {
    console.log('honk :o)')
  };

  // SHOW WHEN SIGNED IN
  const logoutButton = <button className="dangerous" onClick={logout}>LOG OUT</button>;

  // SHOW ON LOG IN PAGE
  const signUpButton = <button onClick={tempFunc}>SIGN UP</button>

  // SHOW ON SIGN UP PAGE
  const logInButton =  <button onClick={tempFunc}>LOG IN</button>


  return (
    <div className="container">
      <p>
        <span>NavBar</span>
        <span>{loginState ? `|| ${username} ||` : null}</span>
        <span>{loginState ? logoutButton : otherbutton }</span>
        <span>{}</span>
      </p>
    </div>
  );
}

export default NavBar;