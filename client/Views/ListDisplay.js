import React, { useState, useEffect, useContext } from 'react';
import { ListContext } from '../Context/ListContext';

import Graph from '../Components/Graph';
import Chart from '../Components/Chart';

// retrieve List & Item Data
// pass down relevant data to Graph & Chart
const ListDisplayView = () => {
  const [refresh, setRefresh] = useState('')
  const { listID, fetchItems } = useContext(ListContext);

  useEffect(() => {
    fetchItems({ listID });
  }, [refresh]);

  return (
    <>
      <Graph />
      <Chart />
    </>
  )
}

export default ListDisplayView;