import React, { useState } from 'react';

const defaultContext = {
  listID: '60a6bc5eb9d06a05ac4962c2',
  items: [{ date: 'today', value: '153', _id: '1' }, { date: 'yesterday', value: '154', _id: '2'}],
  mostRecent: {},
  fetchList: () => { },
  fetchItems: () => { },
};

export const ListContext = React.createContext(defaultContext);

const ListContextProvider = (props) => {

  const fetchList = ({ userID, title }) => {
    console.log('fetching list');

    fetch(`http://localhost:3000/list/${listID}`)
      .then(data => data.json())
      .then(data => {
        console.log('fetch list', data);
        setState({
          ...state,
          list: data,
        })
      })
      .catch(err => {
        console.log('fetchList ERROR', err);
      })
  }

  const fetchItems = ({ listID }) => {
    fetch(`http://localhost:3000/item/${listID}`)
      .then(data => data.json())
      .then(data => {
        console.log('items data', data);

        setState({
          ...state,
          items: [data],
        });
      })
      .catch(err => console.log('fetchItem ERROR: ', err));
  }

  const initContext = {
    ...defaultContext,
    fetchList: fetchList,
    fetchItems: fetchItems,
  }

  const [state, setState] = useState(initContext);

  return (
    <>
      <ListContext.Provider value={state}>
        {props.children}
      </ListContext.Provider>
    </>
  )
}

export default ListContextProvider;