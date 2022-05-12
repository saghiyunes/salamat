import React from "react";
import Navbar from "./Navbar";

import { Carousel } from 'antd';

function onChange(a, b, c) {
    console.log(a, b, c);
}

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '180px',
    textAlign: 'center',
    background: '#364d79',
    
};

export default () => (
    
    <Carousel afterChange={onChange}>
      

        <div>

            <img src="https://s6.uupload.ir/files/60_ext_9j08.jpg" style={{width:"100%"}}/>
        </div>

        <div>
            <img src="https://s6.uupload.ir/files/64_ext_0tk9.jpg" style={{width:"100%"}}/>
        </div>


    </Carousel>
);