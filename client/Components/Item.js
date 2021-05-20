import React from 'react';

function Item(props) {
  const { value, date } = props;

  return (
    <div>
      Item {value} {date}
    </div>
  )
}

export default Item;