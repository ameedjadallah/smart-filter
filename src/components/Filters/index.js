import React, { useState, useEffect } from 'react';

import List from '../List';
import { useWindowSize } from '../../utils/useWindowSize';
import { getJsonFile, isEmptyObject } from '../../utils/helpers';

function Filters() {
  const [data, setData] = useState({});
  const size = useWindowSize();
  const isMobile = size.width <= 768;

  useEffect(() => {
    getJsonFile('data.json').then(response => setData(response));
  }, []);

  return (
    <>
      {
        !isEmptyObject(data) &&
        <List items={data} isMobile={isMobile} />
      }
    </>
  );
}

export default Filters;