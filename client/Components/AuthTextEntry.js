import React, { useState } from 'react';

// keep generic to reuse between LOGIN and SIGNUP
const authTextEntry = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // state = {
  //   username, password
  // }

  // setState({username: e.target.value})

  return (
    <div className='text-entry'>
      <p>
        Username Plz: 
        <input
          onChange={(e) => setUsername(e.target.value)}
        />
      </p>
      <p>
        Password: 
        <input
          onChange={(e) => setPassword(e.target.value)}
        />
      </p>
      <button
        onClick={() => props.onSubmit({ username, password })}
      >
        {props.title}
      </button>
    </div>
  );
}

export default authTextEntry;