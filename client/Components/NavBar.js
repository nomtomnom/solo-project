import React, { useContext } from 'react';
import AuthContext from './../Context/authContext';

function NavBar() {
  const context = useContext(AuthContext);
  console.log('navbar context', context);

  // const loggedIn = 'heya';
  const loggedIn = context.login ? 'username' : 'Log In';

  return (
    <div>
      <p>NavBar</p>
      <p>{loggedIn}</p>
    </div>
  );
}

export default NavBar;