import { Line } from '@ant-design/plots';
import React, { useEffect, useState } from 'react';

interface LineProps {
  data: Array<number | string>;
}

const DemoLine = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(data);
  }, []);

  const config = {
    data,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      tickCount: 5,
    },
  };

  return <Line {...config} />;
};
