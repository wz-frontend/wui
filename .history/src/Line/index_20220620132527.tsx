import { Line as BasicLine } from '@ant-design/plots';
import React, { memo, useEffect, useState } from 'react';

interface LineProps {
  data: Array<object>;
  xField: string;
  yField: string;
}

const Line: React.FC<LineProps> = (props) => {
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

  return <BasicLine {...config} />;
};

export default memo(Line);
