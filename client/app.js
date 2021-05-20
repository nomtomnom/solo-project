import React from 'react';
import ReactDOM from 'react-dom';

import Content from './content';

import AuthContextProvider from './Context/authContext';

function App() {
  console.log('app rerender');

  return (
      <AuthContextProvider>
        <Content />
      </AuthContextProvider>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));