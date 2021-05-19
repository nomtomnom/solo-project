import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import DisplayView from './Views/Display';
import LoginView from './Views/Login';
// import SignupView from './Views/Signup';
import NavBar from './Components/NavBar';

import AuthContext from './Context/authContext';

function App() {
  console.log('React App rendering');
  const [login, setLogin] = useState(false);
  const [userID, setUserID] = useState(null);
  const [username, setUsername] = useState(null);

  const child = login ? <DisplayView /> : <LoginView />

  const handleClick = () => {
    setLogin(!login);
  }

  return (
    <div>
      <AuthContext.Provider value={{ login, userID, username }}>
        <NavBar />
        {child}
        <button onClick={handleClick} />
      </AuthContext.Provider>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));