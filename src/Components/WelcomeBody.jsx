import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";




const Container = styled.div`
width: 1349px;
height: 750px;
position: relative;
bottom: 5px;
background: url("https://www.bates.edu/wordpress/files/2016/07/gradient5.jpg");

`;

const LogoBox = styled.div`
position: relative;
top: 70px;
display: flex;
justify-content: center;
align-items: center;



`;

const BimehLogo = styled.img`
width: 113px;
height: 80px;
position: relative;
right: 490px;
top: 7px;
@media only screen and (max-width: 640px) {
 width: 80px;
 height: 80px;
 position: relative;
 right:-25% ;



} 



`;

const IranLogo = styled.img`
width: 113px;
height: 80px;
position: relative;
right: 30px;
@media only screen and (max-width: 640px) {
 width: 80px;
 height: 80px;
 position: relative;
right:-45% ;



} 


`;

const EnterPanel = styled.div`
width: 370px;
height: 230px;
border: 1px solid #b7c1cb;
border-radius: 12px;
background: linear-gradient( #FFF, #edecec);
position: relative;
top: 140px;
display: block;
right: 37%;
@media only screen and (max-width: 640px) {
    width: 180px;
    height: 140px;
    order: 1px solid #b7c1cb;
border-radius: 12px;
background: linear-gradient( #FFF, #edecec);
position: relative;
top: 150px;
right: 8%;
} 


`;

const TitleText = styled.h1`
font-size: 1.4em;
    color: #004c86;
    font-weight: bold;
    text-align: center;
    margin-top: 80px;
    @media only screen and (max-width: 640px) {
        font-size: 1rem;
        position: relative;
        bottom: 35%;

} 
    

`;

const IranFlag = styled.img`
width: 90px;
height: 83px;
position: relative;
bottom: 120px;
right: 60%;
@media only screen and (max-width: 640px) {
    width: 60px;
    height: 60px;
    position: relative;
bottom: 130px;
right: 69%;

} 


`;

const Border = styled.div`
width: 370px;
height: 60px;
background-color: rgb(211,211,211);
position: relative;
bottom: 30px;
border-radius: 0px 0px 12px 12px ;
@media only screen and (max-width: 640px) {
    width: 180px;
height: 55px;
background-color: rgb(211,211,211);
position: relative;
bottom: 85px;
border-radius: 0px 0px 12px 12px ;


} 



`;

const LoginButton = styled.button`
width: 174px;
height: 40px;
display: block;
border-radius: 6px;
border: none;
background-color: #58D68D;
position: relative;
bottom: 20px;
right: 25%;

cursor: pointer;
:hover{
    background-color: #A37EB4;
}
@media only screen and (max-width: 640px) {
    display: block;
    width: 130px;
height: 40px;
border-radius: 6px;
border: none;
background-color: #58D68D;
position: relative;
right: 15%;
top


cursor: pointer;
:hover{
    background-color: #A37EB4;
}
} 


`;



const ButtonText = styled.span`
font-size: 1rem;
font-weight: 700;
position: relative;
color: white;




`;

const Desceription = styled.h1`
position: relative;
bottom: 11px;
font-size: .9em;
font-weight: normal;
 color: #232323;
 text-align: center;
 @media only screen and (max-width: 640px) {
    position: relative;
bottom: 20px;
font-size: 0.9rem;
font-weight: bold;
color: #004c86;


} 



`;

const CpmpanyText = styled.h1`
text-align: center;
font-size: 1rem;
color: white;
position: relative;
top: 210px;
@media only screen and (max-width: 640px) {
    text-align: center;
font-size: 1rem;
color: white;
position: relative;
top: 210px;


} 


`;

const Parcham = styled.img`
position: relative;
 float: left;
  top: 150px;
  @media only screen and (max-width: 640px) {
   display: none;
} 

  
  

`;







const WelcomeBody = () => {
    return (
        <div>
            <Container>
                <div >
                    <Parcham src="https://s6.uupload.ir/files/full_depositphotos_266325424-stock-illustration-iran-flag-vector-illustration-on-removebg-preview_godk.png" />

                </div>

                <LogoBox>

                    <BimehLogo src="https://s6.uupload.ir/files/6d535acce83344a5b26e1e8f8d1f294c.w_725_h_440_r_k-removebg-preview_ku4z.png" />
                    <IranLogo src="https://s6.uupload.ir/files/nody-??????????-????????????-????????????-??????????-1628453080-removebg-preview_9iae.png" />

                </LogoBox>
                <EnterPanel>
                    <TitleText>
                        ???????????? ???????????????????? ???????? ??????????
                    </TitleText>
                    <IranFlag src="https://samanese.ir/img/Flag2.png" />
                    <Border>


                        <Link to={'/login'}>

                            <LoginButton>


                                <ButtonText>
                                    ???????????? ?????????? ????????
                                </ButtonText>



                            </LoginButton>
                        </Link>
                        <Desceription>
                            ???????????? ???????? ???????????? ???????? ??????????
                        </Desceription>

                    </Border>

                    <CpmpanyText>
                        ?????????? ???????? ???????? ???????? ???????????? ?????????? ???????????? ???????? ?????????? ???????????? (???? ?????????????? ??????????) ?????????? ???????????? .
                    </CpmpanyText>
                </EnterPanel>


            </Container>


        </div>
    );
}

export default WelcomeBody;