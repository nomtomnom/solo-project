import React, { useState } from 'react';

// keep generic to reuse between LOGIN and SIGNUP
const authTextEntry = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='text-entry'>
      <p>
        Username: 
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
        value='Submit'
      >
        Submit
      </button>
    </div>
  );
}

export default authTextEntry;