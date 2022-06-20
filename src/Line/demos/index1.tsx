import React from 'react';
import Line from '..';
/**
 * transform: true
 */
export default function LineDemo1() {
  const data = [
    {
      Date: '2010-01',
      scales: 1998,
    },
    {
      Date: '2010-02',
      scales: 1850,
    },
    {
      Date: '2010-03',
      scales: 1720,
    },
    {
      Date: '2010-04',
      scales: 1818,
    },
    {
      Date: '2010-05',
      scales: 1920,
    },
    {
      Date: '2010-06',
      scales: 1802,
    },
    {
      Date: '2010-07',
      scales: 1945,
    },
    {
      Date: '2010-08',
      scales: 1856,
    },
    {
      Date: '2010-09',
      scales: 2107,
    },
    {
      Date: '2010-10',
      scales: 2140,
    },
    {
      Date: '2010-11',
      scales: 2311,
    },
    {
      Date: '2010-12',
      scales: 1972,
    },
  ];
  const xField = 'Date';
  const yField = 'scales';
  const config = { data, xField, yField };
  return (
    <div>
      <Line {...config} />
    </div>
  );
}
