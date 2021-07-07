import React from 'react';
import styled from 'styled-components';
import Navbar from '../navbar/Navbar';
import { Button } from '../navbar/Navbar';

const MyHeader = styled.header`
  background-image: url('/challenge-web/images/bg-hero-desktop.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 40px;
  @media (max-width: 500px) {
    padding: 20px;
  }
`;
const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 45% 55%;
  margin-top: 60px;
  gap: 10px;
  @media (max-width: 500px) {
    grid-template-columns: 100%;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 500px) {
    align-items: center;
    text-align: center;
  }
`;
const H1 = styled.h1`
  font-size: 45px;
  line-height: 4.2rem;
  font-weight: 700;
  @media (max-width: 500px) {
    font-size: 30px;
    line-height: 3.2rem;
  }
`;
const P = styled.p`
  font-size: 18px;
  line-height: 2rem;
  font-weight: 700;
  margin: 40px 0;
  @media (max-width: 500px) {
    font-size: 17px;
    line-height: 1.5rem;
    font-weight: 100;
    color: darkslateblue;
    margin: 21px 0;
  }
`;

const Img = styled.img`
  width: 100%;
  margin-top: 55px;
`;

const Header = () => {
  return (
    <MyHeader>
      <div className='container'>
        <Navbar />
        <HeroSection>
          <HeroContent>
            <H1>
              build the community <br /> your fans will love
            </H1>
            <P>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
              numquam magnam amet. Dolore consectetur aut totam, unde ipsum
              optio harum!
            </P>
            <Button pink>get started for free</Button>
          </HeroContent>
          <Img src='/challenge-web/images/illustration-mockups.svg' alt='' />
        </HeroSection>
      </div>
    </MyHeader>
  );
};

export default Header;
