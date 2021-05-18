import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    console.log('React App rendering');

    return (
      <div>
        <h1>NavBar</h1>
        <h1>Graph</h1>
        <h1>History Chart</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));