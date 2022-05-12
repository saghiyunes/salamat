import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/plots';

const PieChart = () => {
  
  const data = [
    {
      type: '\u0641\u0648\u0644\u0627\u062f',
      value:  0.2339583479,
    },
    {
      type: '\u0641\u0627\u0631\u0633',
      value: 0.1468738467,
    },
    {
      type: '\u0645\u0627\u0631\u0648\u0646',
      value: 0.1135135042,
    },
    {
      type: '\u06a9\u0686\u0627\u062f',
      value: 0.0861248657,
    },
    {
      type: '\u0641\u0645\u0644\u06cc',
      value: 0.0506180497,
    },
    {
      type: '\u0634\u0628\u0646\u062f\u0631',
      value: 0.043561764,
    },
    {
      type: '\u0634\u0628\u0646\u062f\u0631',
      value: 0.040880563,
    },
    {
      type: '\u0648\u062a\u062c\u0627\u0631\u062a',
      value: 0.0407567664,
    },
    {
      type: '\u0648\u0628\u0635\u0627\u062f\u0631',
      value: 0.0332554164,
    },
    {
      type: '\u0634\u062a\u0631\u0627\u0646',
      value:0.0320073684,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
};

export default PieChart;
