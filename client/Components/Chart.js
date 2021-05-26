/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import Item from './Item';
import { ListContext } from '../Context/ListContext';

// creates ITEM components (iterate through item array received from server)
// displays ITEM components

function Chart() {
  const { items } = useContext(ListContext);
  
  const itemList = items.map(item => {
    return <Item date={item.date} value={item.value} key={item._id} />
  });

  return (
    <div>
      Chart
      {itemList}
    </div>
  );
}

export default Chart;