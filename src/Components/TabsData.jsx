import React from "react";
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import DataTable from './DataTable';
import PieChart from "./PieChart";
import dates from "../Data/dates.json";
import ColumnChart from "./ColumnChart";


const { TabPane } = Tabs;

const BorderData = styled.div`
position: relative;
width: 600px;
height: 220px;
border:  1px solid black;
display: inline-block;

background: linear-gradient(to right,#01a9ac,#01dbdf);
border: none;
border-radius: 12px;
display: inline-block;
 margin: 0px 70px 30px 0px;
 cursor: pointer;
 :hover {
    box-shadow: rgba(0, 0, 0, 0.3) 10px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
 
 }
 @media only screen and (max-width: 640px) and (max-width: 414px)  {
    position: relative;
width: 345px;
height: 220px;
border:  1px solid black;
display: block;

background: linear-gradient(to right,#01a9ac,#01dbdf);
border: none;
border-radius: 12px;
 margin: 0px 25px 30px 0px;
 cursor: pointer;
 :hover {
    box-shadow: rgba(0, 0, 0, 0.3) 10px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
 
 }
 @media only screen and (max-width: 360px)   {
    position: relative;
width: 310px;
height: 220px;
border:  1px solid black;
display: block;

background: linear-gradient(to right,#01a9ac,#01dbdf);
border: none;
border-radius: 12px;
 margin: 0px 15px 30px 0px;
 cursor: pointer;
 :hover {
    box-shadow: rgba(0, 0, 0, 0.3) 10px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
 
 }








}


    
    
`;

const BorderData2 = styled.div`
position: relative;
width: 600px;
height: 220px;
border:  1px solid black;
display: inline-block;
margin-left: 10px;
background: linear-gradient(to right,#0ac282,#0df3a3);
border: none;
border-radius: 12px;
margin-right: 9px;
cursor: pointer;
:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 10px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

 
 }
 @media only screen and (max-width: 640px) and (max-width: 414px)  {
    position: relative;
width: 345px;
height: 220px;
border:  1px solid black;
display: block;

background: linear-gradient(to right,#0ac282,#0df3a3);
border: none;
border-radius: 12px;
 margin: 0px 25px 30px 0px;
 cursor: pointer;
 :hover {
    box-shadow: rgba(0, 0, 0, 0.3) 10px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
 
 }
 @media only screen and (max-width: 360px)   {
    position: relative;
width: 310px;
height: 220px;
border:  1px solid black;
display: block;
background: linear-gradient(to right,#0ac282,#0df3a3);
border: none;
border-radius: 12px;
 margin: 0px 15px 30px 0px;
 cursor: pointer;
 :hover {
    box-shadow: rgba(0, 0, 0, 0.3) 10px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
 
 }





 }
 


    
    
`;

const Bordercontainer = styled.div`
position: relative;
margin: 20px 0px 0px 60px;

`;

const Title = styled.h1`
font-size: 1.4rem;
font-weight: 500;
position: relative;
color: white;
float: right;
position: relative;
margin:10px 10px 0px 0px;

`;

const MoneyValeu = styled.h1`
position: relative;
top: 30px;
left: 115%;
color: white;




`;

const Value = styled.div`
position: relative;
display: flex;
justify-content: space-between;


`;

const TitleContainer = styled.div`



`;

const Price = styled.span`
position: relative;
top: 40px;
font-size: 1.4rem;
color: white;
right: 60%;
@media only screen and (max-width: 640px) {
    position: relative;
top: 40px;
font-size: 1.4rem;
color: white;
right: -40px;


 
 }

 @media only screen and (max-width: 370px) {
    position: relative;
top: 40px;
font-size: 1.4rem;
color: white;
right: -80px;


 
 }

 @media only screen and (max-width: 370px) {
    position: relative;
top: 40px;
font-size: 1.4rem;
color: white;
right: -75px;


 
 }



`;

const ImgGrow = styled.img`
width: 50px;
height: 50px;


`;


const MonthGrow = styled.div`
float: right;


`;


const WeekGrow = styled.div`
float: right;



`;

const Grow = styled.div`
display: flex;
justify-content: space-around;
margin-top: 11px;
@media only screen and (max-width: 640px) {
    margin-top: 0px;
 }




`;

const ImgMoney = styled.img`
width: 80px;
height: 80px;
position: relative;
left:118%;
top: 25px;
@media only screen and (max-width: 640px) {
    width: 80px;
height: 80px;
position: relative;
left: 360px;
top: 25px;
 
 }






`;

const SpanTitle = styled.span`

position:relative;
font-size: 1.4rem;
color:#01a9ac;
fontWeight:600;
text-align: center;
right: 45%;
@media only screen and (max-width: 640px)   {
    right: 30%;

}



`;

const SpanTitle2 = styled.span`

position:relative;
font-size: 1.4rem;
color:#01a9ac;

text-align: center;
@media only screen and (max-width: 640px)   {
    right: 10%;

}



`;

const SpanTitle3 = styled.span`

position:relative;
font-size: 1.4rem;
color:#01a9ac;

right: 39%;
@media only screen and (max-width: 640px)   {
    right: 30%;

}



`;

const SpanTitle4 = styled.span`

position:relative;
font-size: 1.4rem;
color:#01a9ac;

right: 39%;

@media only screen and (max-width: 640px) and (max-width: 414px)  {
position:relative;
right: 5%;
font-size: 1.2rem;
bottom: 6px;



   
 }


 @media only screen and (max-width: 360px)   {
position:relative;
right: 5%;
font-size: 1.2rem;
bottom: 6px;


    
 }





`;


const MapText = styled.h1`
font-size: 1.3rem;
text-align: center;
background-color: white;
position: relative;
top: 35px;
`;







const TabsData = () => {

    return (
        <div>
            <Tabs style={{ position: "relative", top: "65px" }} defaultActiveKey="1" centered>
                <TabPane tab="نمایش ارزش پرتفوی" key="1">
                    <SpanTitle >
                        نمایش ارزش پرتفوی
                    </SpanTitle>
                    <div >
                        {
                            dates.map(data => {
                                return (
                                    <div>
                                        <Bordercontainer>
                                            <BorderData>
                                                <TitleContainer>
                                                    <Title>
                                                        {data.edalat5.name}

                                                    </Title>

                                                </TitleContainer>
                                                <br />
                                                <br />






                                                <Value>


                                                    <Price>
                                                        {data.edalat5.last_value}


                                                    </Price>


                                                    <ImgMoney src="https://s6.uupload.ir/files/eskenas-farapic-big-removebg-preview_4911.png" />

                                                    <MoneyValeu>
                                                        ارزش ریالی

                                                    </MoneyValeu>


                                                </Value>
                                                <Grow>
                                                    <MonthGrow>
                                                        بازدهی هفته
                                                        <ImgGrow src="https://s6.uupload.ir/files/growth-icon-png-12-removebg-preview_9nks.png" />
                                                    </MonthGrow>

                                                    <WeekGrow>
                                                        بازدهی ماه
                                                        <ImgGrow src="https://s6.uupload.ir/files/growth-icon-png-12-removebg-preview_9nks.png" />

                                                    </WeekGrow>
                                                </Grow>

                                                <Grow>
                                                    <MonthGrow>
                                                        {data.edalat5.last7Return}
                                                    </MonthGrow>

                                                    <WeekGrow>
                                                        {data.edalat5.last30Return}


                                                    </WeekGrow>
                                                </Grow>







                                            </BorderData>

                                            <BorderData2>
                                                <TitleContainer>
                                                    <Title>
                                                        {data.edalat1.name}
                                                    </Title>
                                                </TitleContainer>
                                                <br />
                                                <br />


                                                <Value>
                                                    <Price>
                                                        {data.edalat1.last_value}
                                                    </Price>
                                                    <ImgMoney src="https://s6.uupload.ir/files/eskenas-farapic-big-removebg-preview_4911.png" />
                                                    <MoneyValeu>
                                                        ارزش ریالی

                                                    </MoneyValeu>

                                                </Value>
                                                <Grow>
                                                    <MonthGrow>
                                                        بازدهی هفته
                                                        <ImgGrow src="https://s6.uupload.ir/files/growth-icon-png-12-removebg-preview_9nks.png" />
                                                    </MonthGrow>

                                                    <WeekGrow>
                                                        بازدهی ماه
                                                        <ImgGrow src="https://s6.uupload.ir/files/growth-icon-png-12-removebg-preview_9nks.png" />
                                                    </WeekGrow>
                                                </Grow>
                                                <Grow>
                                                    <MonthGrow>
                                                        {data.edalat1.last7Return}
                                                    </MonthGrow>

                                                    <WeekGrow>
                                                        {data.edalat1.last30Return}
                                                    </WeekGrow>
                                                </Grow>




                                            </BorderData2>
                                        </Bordercontainer>


                                    </div >
                                )
                            })
                        }


                    </div>
                </TabPane>
                <br />
                <TabPane tab=" جدول داده های استانی" key="2">
                    <SpanTitle>
                        جدول داده های استانی
                    </SpanTitle>
                    <DataTable />
                </TabPane>
                <TabPane tab=" نمودار دایره ای توزیع وزن سرمایه گذاری" key="3">
                    <SpanTitle3 >
                        نمودار دایره ای توزیع وزن سرمایه گذاری

                    </SpanTitle3>
                    <div dir="ltr">
                    <PieChart />
                    </div>
                </TabPane>

                <TabPane tab=" نمودار ستونی توزیع وزن سرمایه گذاری" key="4">
                    <SpanTitle4 >
                        نمودار ستونی توزیع وزن سرمایه گذاری

                    </SpanTitle4>
                    <ColumnChart />

                </TabPane>
            </Tabs>

            <br />
            <br />
         
            
            <MapText>موقعیت مکانی سازمان در نقشه</MapText>
            <br />
            <br />


        </div>
    );
}

export default TabsData;