import React, { useContext } from 'react';
import AuthContext from './../Context/authContext';

function NavBar() {
  const context = useContext(AuthContext);
  console.log('navbar context', context);

  const loggedIn = context.loginState ? 'UserName Display' : 'Log In / Sign Up Toggle';

  return (
    <div>
      <p>NavBar || {loggedIn} </p>
    </div>
  );
}

export default NavBar;