import React from "react";
import styled from "styled-components";

const Container = styled.div`
background-color: #014D71;

`;

const ImgFooter = styled.img`
position: relative;
top: 10px;
right: 30px;



`;

const SupportPhones = styled.p`
  padding-right: 20px;
position: relative;
top: 20px;
  color: white;
`;

const FooterIcons = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-column-gap: 10px;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 60px;
  align-items: center;
  margin-top: 30px;
  margin-right: 19px;
`;

const FooterMenu = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;

  @media only screen and (max-width: 640px)   {
 display: none;
}
`;

const Img1 = styled.img`
  margin-right: 60px;
`;

const Img2 = styled.img`
  margin-right: 30px;
`;

const Img3 = styled.img`
  margin-right: 30px;
`;

const Img4 = styled.img`
  margin-right: 30px;
`;

const Img5 = styled.img`
  margin-right: 70px;
`;

const Text1 = styled.p``;

const Text2 = styled.p``;

const Text3 = styled.p``;

const Text4 = styled.p``;

const Text5 = styled.p``;

const Column1 = styled.div``;

const Column2 = styled.div``;

const Column3 = styled.div``;

const Column4 = styled.div``;

const Column5 = styled.div``;

const Div1 = styled.div`
  padding-right: 25px;
`;

const Div2 = styled.div``;

const Div3 = styled.div``;

const Div4 = styled.div``;

const BaDigikal = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  color: white;
  @media only screen and (max-width: 640px)   {
    font-size: 1rem;
    position: relative;
    left: 30px;
}
`;

const Ul = styled.ul``;

const Li = styled.li`
  list-style-type: none;
  font-size: 1px;
  font-weight: 400;
  line-height: 2.15;

@media only screen and (max-width: 640px) and (max-width: 414px)  {
  font-size: 0.9rem;
  position: relative;
  left: 30px;

   

   
 }
 @media only screen and (max-width: 360px)   {
  font-size: 0.9rem;
  position: relative;
  left: 30px;




 }
`;

const A = styled.a`
   color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  color: white;
  @media only screen and (max-width: 640px) and (max-width: 414px)  {
font-size: 14px;
width: 20px;
height: 20px;
text-align: justify;

   
 }
 @media only screen and (max-width: 360px)   {

  font-size: 14px;
  width: 20px;
height: 20px;
text-align: justify;




`;

const Img01 = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 20px;
`;

const Img02 = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 20px;
`;

const Img03 = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 20px;
`;

const Img04 = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 20px;
`;

const Follow = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  position: relative;
  color: white;
`;

const Sochial = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 90px;
`;

const NewsletterText = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: white;
  position: relative;
  bottom: 50px;
`;

const NewsletterSection = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  bottom: 30px;
`;

const Input = styled.input`
  width: 320px;
  height: 48px;
  border-radius: 8px;
  border: none;
  background-color: #f0f0f1;
  padding-right: 25px;
  @media only screen and (max-width: 640px) and (max-width: 414px)  {
 position: relative;
 left: 360px;
 width: 300px;

   
 }
 @media only screen and (max-width: 360px)   {
  position: relative;
 left: 290px;
 width: 300px;



 }
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  background-color: #f0f0f1;
  width: 58px;
  height: 48px;
  margin-right: 10px;
  @media only screen and (max-width: 640px) and (max-width: 414px)  {
 position: relative;
left: 350px;

   
 }
 @media only screen and (max-width: 360px)   {
  position: relative;
  left: 130px;




 }
`;

const Iframe = styled.div`
@media only screen and (max-width: 640px)   {
width: :20px;
height: 200px;
}

`;





const Footer2 = () => {
  return (
    <Container>
      

       <Iframe>
      <iframe height="" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6475.2435556442515!2d51.436992!3d35.7601!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9ecdccb71b0141ca!2z2LTYsdqp2Kog2YXYr9uM2LHbjNiqINiz2LHZhdin24zZhyDYqNuM2YXZhyDYs9mE2KfZhdiqINin24zYsdin2YbbjNin2YY!5e0!3m2!1sen!2s!4v1646214317626!5m2!1sen!2s" style={{ width: "100%", height: "330px" }}></iframe>
      </Iframe>
      <ImgFooter src="https://s6.uupload.ir/files/image_cv60.png" />
      <FooterMenu>
        <Div1>
          <Ul>
            <BaDigikal>  پیوند های سایت </BaDigikal>
            <Li>
              <A href="#">پایگاه اطلاع رسانی دفتر مقام معظم رهبری</A>
            </Li>
            <Li>
              <A href="#">وزارت بهداشت، درمان و آموزش پزشکی</A>
            </Li>
            <Li>
              <A href="#">سازمان بیمه سلامت ایران</A>
            </Li>
            <Li>
              <A href="#">سامانه نسخه الکترونیک </A>
            </Li>
            <Li>
              <A href="#">شرکت داروسازی فارماشیمی</A>
            </Li>

            <Li>
              <A href="#">شرکت آتیه سازان حافظ</A>
            </Li>

            <Li>
              <A href="#">شرکت داروسازی فارماشیمی</A>
            </Li>
          </Ul>
        </Div1>

        <Div2>
          <Ul>
            <BaDigikal>درباره ما   </BaDigikal>
            <Li>
              <A href="#">معرفی شرکت</A>
            </Li>
            <Li>
              <A href="#">ماموریت و چشم انداز </A>
            </Li>
            <Li>
              <A href="#">نمودار سازمانی</A>
            </Li>
            <Li>
              <A href="#">تماس با ما</A>
            </Li>

          </Ul>
        </Div2>

        <Div3>
          <Ul>
            <BaDigikal> لینک های مرتبط </BaDigikal>
            <Li>
              <A href="#">  اتوماسیون</A>
            </Li>
            <Li>
              <A href="#">  وب کارت  </A>
            </Li>
            <Li>
              <A href="#">پست   الکترونیک </A>
            </Li>
          </Ul>
        </Div3>
        <Div4>
          <Follow>همراه ما باشید!</Follow>
          <Sochial>
            <Img01
              src="
https://www.uplooder.net/img/image/66/5e8a41e435c15b2748ee6e48ff766a47/icons8-instagram-48.png
کپی کن"
            />
            <Img02 src="https://www.uplooder.net/img/image/98/c32cdad063ffe04cdb94c6e99cd7f14e/icons8-twitter-48.png" />
            <Img03 src="https://www.uplooder.net/img/image/38/6056f180d432d5cce837a1cc93c867d0/icons8-linkedin-64.png" />
            <Img04 src="https://www.uplooder.net/img/image/29/63b40b7eb7309ccf7904b0cfd7ea3bb3/icons8-youtube-47.png" />
          </Sochial>
          <NewsletterText>
            ادرس : تهران - بلوار میر داماد - خیابان نساء - خیابان زرنگار - پلاک ۳۷
          </NewsletterText>
          <NewsletterText>
            تلفکس: 5-22909622 (021)
          </NewsletterText>
          <NewsletterText>
            پست الکترونیک:   info@ihiic.ir
          </NewsletterText>
          <NewsletterSection>
            <Input
              type="email"
              className="form-control"
              placeholder="ایمیل خود را وارد کنید در خبرنامه عضو شوید "
            />
            <Button type="submit">ثبت </Button>
          </NewsletterSection>
        </Div4>
      </FooterMenu>
    </Container>
  );
};

export default Footer2;
