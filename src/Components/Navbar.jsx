import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Drawer, Button, Space } from 'antd';
import styled from 'styled-components';



const Ul = styled.ul``;

const Li = styled.li`
  list-style-type: none;
  font-size: 1px;
  font-weight: 400;
  line-height: 2.15;
`;
const A = styled.a`
   color: black;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  color: black;
`;

const Toggle = styled.img`
  width  :24px ;
  height: 24px;
  position: relative;
  right: 9px;
  bottom: 2px;
`;

const App = () => {
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState();

  const showDefaultDrawer = () => {
    setSize('default');
    setVisible(true);
  };

  const showLargeDrawer = () => {
    setSize('large');
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Space>
        <Button type="primary" onClick={showDefaultDrawer} style={{position:"relative"}}>
        منوی کاربری سایت
      
        </Button>
       
      </Space>
      <Drawer
        width={"270px"}
        title={`شرکت مدیریت سرمایه بیمه سلامت ایرانیان`}
        placement="right"
        size={size}
        onClose={onClose}
        visible={visible}
        extra={
          <Space>
           
          </Space>
        }
      >
        <Ul>
                      
                        <Li>
                            <A href="#">صفحه نخست</A>
                        </Li>
                        <Li>
                            <A href="#">درباره ما </A>
                        </Li>
                        <Li>
                            <A href="#">شرکت های تابعه</A>
                        </Li>
                        <Li>
                            <A href="#">شفافیت عملکرد  </A>
                        </Li>
                        <Li>
                            <A href="#">بازار سرمایه</A>
                        </Li>

                        <Li>
                            <A href="#">منابع انسانی</A>
                        </Li>

                        <Li>
                            <A href="#">گالری</A>
                        </Li>

                        <Li>
                            <A href="#">تماس با ما </A>
                        </Li>
                    </Ul>
                    <br/>
                    <br/>
<h1 style={{fontSize:"1rem"}}>شرکت های زیر مجموعه سازمان</h1>
<br/>
                    <img src='http://www.ihiic.ir/userfiles/files/LinkImage/ihiic%20(4).jpg'/>
                    <img src='http://www.ihiic.ir/userfiles/files/LinkImage/ihiic%20(2).jpg'/>
                    <img src='http://www.ihiic.ir/userfiles/files/LinkImage/ihiic%20(1).jpg'/>

      </Drawer>
    </>
  );
};

export default App;