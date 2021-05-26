import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import './../styles/main.css';

import Content from './content.js';
import AuthContextProvider from './Context/AuthContext';

function App() {
  console.log('app rerender');

  return (
      <AuthContextProvider>
        <Content />
      </AuthContextProvider>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));