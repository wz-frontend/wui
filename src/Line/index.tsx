import { Line as BasicLine } from '@ant-design/plots';
import React, { memo, useEffect } from 'react';

interface LineProps {
  data: object[];
  xField: string;
  yField: string;
}

const Line: React.FC<LineProps> = (props) => {
  //   const [data, setData] = useState([]);
  const { data = [], xField, yField } = props;
  useEffect(() => {
    console.log(data);
  }, []);

  const config = {
    data,
    padding: 2,
    xField,
    yField,
    xAxis: {
      tickCount: 5,
    },
  };

  return <BasicLine {...config} />;
};

export default memo(Line);
