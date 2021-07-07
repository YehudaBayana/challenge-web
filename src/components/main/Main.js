import React from 'react';
import styled from 'styled-components';
import { Button } from '../navbar/Navbar';

const MainTag = styled.main`
  margin-top: 150px;
  @media (max-width: 500px) {
    margin-top: 77px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  display: flex;
  color: gray;
  box-shadow: 1px 1px 15px lightgray;
  border-radius: 10px;
  margin: 20px 0;
  @media (max-width: 500px) {
    flex-direction: column-reverse;
    width: 90%;
    margin: 20px auto;
    padding: 40px 30px;
    text-align: center;
  }
`;

const CardText = styled.div`
  padding: 140px;
  @media (max-width: 500px) {
    padding: 31px 0;
  }
`;
const ImgDiv = styled.div`
  padding: 50px 0 0px 150px;
  @media (max-width: 500px) {
    padding: 0;
  }
`;

const GetStarted = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 600px;
  padding: 50px;
  margin: 80px auto -85px auto;
  box-shadow: 0px -10px 10px lightgray;
  border-radius: 15px;
  overflow: overlay;
  z-index: 2;
  @media (max-width: 500px) {
    width: 80%;
  }
`;
const Main = () => {
  return (
    <MainTag>
      <div className='container'>
        <CardWrapper>
          <Card>
            <CardText>
              <h2>sdfdsfsd</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                atque nam expedita sunt, ratione, nemo aliquam illo ducimus
                quaerat fugit laboriosam eum facere, libero necessitatibus!
              </p>
            </CardText>
            <ImgDiv>
              <img
                src='/challenge-web/images/illustration-grow-together.svg'
                width='90%'
                alt=''
              />
            </ImgDiv>
          </Card>
          <Card>
            <ImgDiv>
              <img
                src='/challenge-web/images/illustration-flowing-conversation.svg'
                width='90%'
                alt=''
              />
            </ImgDiv>
            <CardText>
              <h2>sdfdsfsd</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                atque nam expedita sunt, ratione, nemo aliquam illo ducimus
                quaerat fugit laboriosam eum facere, libero necessitatibus!
              </p>
            </CardText>
          </Card>
          <Card>
            <CardText>
              <h2>sdfdsfsd</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                atque nam expedita sunt, ratione, nemo aliquam illo ducimus
                quaerat fugit laboriosam eum facere, libero necessitatibus!
              </p>
            </CardText>
            <ImgDiv>
              <img
                src='/challenge-web/images/illustration-your-users.svg'
                width='90%'
                alt=''
              />
            </ImgDiv>
          </Card>
        </CardWrapper>
        <GetStarted>
          <h2 style={{ marginBottom: '25px' }}>
            ready to build your community
          </h2>
          <Button pink>get started for free</Button>
        </GetStarted>
      </div>
    </MainTag>
  );
};

export default Main;
