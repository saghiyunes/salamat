import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import dates from "../Data/dates.json";


const columns = [

  
  {
    title: 'نام نماد',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'ارزش خالص دارایی',
    dataIndex: 'arzeshdarayi',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: ' نسبت قیمت به ارزشش خالص دارایی',
    dataIndex: 'bolandmoddat',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '   : مقدار سرمایه گذاری بلند مدت   ',
    dataIndex: 'meghdarboland',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '   ارزش بازار  ',
    dataIndex: 'mc',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  
  {
    title: '   سود خالص  ',
    dataIndex: 'sood',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },

  
  
  
      
    
];

const data = [
  {
    key: '1',
    name: "\u0648\u0633\u0627\u0631\u0628\u064a\u0644",
    arzeshdarayi:860.0244666176,
    bolandmoddat: 1.4883297507   ,
    meghdarboland:  54360258.899019 ,
    mc:  80905990575360.0 ,
    sood:  25728469000000.0

  },
  {
    key: '2',
    name: "\u0648\u0633\u0627\u0634\u0631\u0642\u064a",
    arzeshdarayi: 1005.0441351836,
    bolandmoddat:   0.44674655 ,
    meghdarboland: 205509279.13382602  ,
    mc:  80905990575360.0 ,
    sood:  -56583057000000.0

    


  },
  {
    key: '3',
    name: "\u0648\u0633\u0627\u063a\u0631\u0628\u064a",
    arzeshdarayi: 1005.8324074643,
    bolandmoddat:   0.4324776143 ,
    meghdarboland:  159681962.74513194 ,
    mc: 80905990575360.0  ,
    sood:  -42007369000000.0




  },
  {
    key: '4',
    name: "\u0648\u0633\u0628\u0648\u0634\u0647\u0631",
    arzeshdarayi: 935.1905983923,
    bolandmoddat:   1.3473189339 ,
    meghdarboland:  45099572.55434699 ,
    mc: 80905990575360.0  ,
    sood:  90399000000.0



  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}



export default () => <Table columns={columns} dataSource={data} onChange={onChange}  locale={{ 
  triggerDesc: 'برای مرتب شدن نزولی و صعودی روی عنوان کلیک کنید',
  cancelSort: 'برای مرتب شدن نزولی و صعودی روی عنوان کلیک کنید',
  triggerAsc: 'برای مرتب شدن نزولی و صعودی روی عنوان کلیک کنید',
}}/>;