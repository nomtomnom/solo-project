import React, { useState } from 'react';

const defaultContext = {
  list: '',
  items: [],
};

export const listContext = React.createContext(defaultContext);

const listContextProvider = (props) => {

  const initContext = {
    ...defaultContext,
  }

  const [state, setState] = useState(initContext);

  return (
    <listContext.Provider value={state}>
      {props.children}
    </listContext.Provider>
  )
}

export default listContextProvider;