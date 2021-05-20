import React from 'react';

import Graph from '../Components/Graph';
import Chart from '../Components/Chart';

// retrieve List & Item Data
// pass down relevant data to Graph & Chart
const ListDisplayView = () => {
  const itemsArr = [{ date: 'today', value: '150' }, { date: 'yestrerday', value: '155' }];

  return (
    <div>
      List Display
      <Graph />
      <Chart items={itemsArr} />
    </div>
  )
}

export default ListDisplayView;