import React, { useContext } from 'react';
import { AuthContext } from './../Context/authContext';

function NavBar() {
  const { loginState, logout } = useContext(AuthContext);

  const loggedIn = loginState ? '|| Username Display ||' : null;

  const logoutButton = loginState ? <button className="dangerous" onClick={logout}>LOG OUT</button> : null;

  return (
    <div>
      <p>NavBar {loggedIn} {logoutButton}</p>
    </div>
  );
}

export default NavBar;