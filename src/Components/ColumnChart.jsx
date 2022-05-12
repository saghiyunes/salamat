import React, { useState, useEffect } from 'react';

import { Column } from '@ant-design/plots';

const ColumnChart = () => {
    const data = [
        {
          action: "\u0641\u0648\u0644\u0627\u062f",
          pv:  0.2339583479,
        },
        {
          action: "\u0641\u0627\u0631\u0633",
          pv: 0.1468738467,
        },
        {
          action: "\u0645\u0627\u0631\u0648\u0646",
          pv: 0.1135135042,
        },
        {
          action: "\u06a9\u0686\u0627\u062f",
          pv: 0.0861248657,
        },
        {
          action: "\u0641\u0645\u0644\u06cc",
          pv: 0.0506180497,
        },
        {
          action: "\u0634\u0628\u0646\u062f\u0631",
          pv: 0.043561764,
        },
        {
          action: "\u0634\u0628\u0646\u062f\u0631",
          pv: 0.040880563,
        },
        {
          action: "\u0648\u062a\u062c\u0627\u0631\u062a",
          pv: 0.0407567664,
        },
        {
          action: "\u0648\u0628\u0635\u0627\u062f\u0631",
          pv: 0.0332554164,
        },
        {
          action: "\u0634\u062a\u0631\u0627\u0646",
          pv:0.0320073684,
        },
      ];
  const config = {
    data,
    xField: 'action',
    yField: 'pv',
    conversionTag: {},
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return <Column {...config} />;
};

export default ColumnChart;
