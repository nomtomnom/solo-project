import React from 'react';
import Item from './Item';

// creates ITEM components (iterate through item array received from server)
// displays ITEM components

function Chart (props) {
  console.log('chart props', props, Array.isArray(props.items));
  const { items } = props;
  const itemList = items.map(item => {
    <Item date={item.date} value={item.value} />
  });

  return (
    <div>
      <p>Chart</p>
      {itemList}
      <Item date="woah" value="nelly" />
    </div>
  );
}

export default Chart;