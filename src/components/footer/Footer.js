import React from 'react';
import styled from 'styled-components';

const FooterS = styled.footer`
  background-color: lightgray;
  color: black;
  height: 420px;
  padding-top: 180px;
  @media (max-width: 500px) {
    height: fit-content;
  }
`;

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  position: relative;
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr 1fr;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style: none;
  font-size: 19px;
`;

const Social = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;
  height: 50px;
  font-size: 29px;
  position: absolute;
  right: 0;
  @media (max-width: 500px) {
    position: unset;
  }
`;

const I = styled.i`
  margin-right: 17px;
  font-size: 17px;
`;

const Li = styled.li`
  height: 30%;
  cursor: pointer;
`;
const Footer = () => {
  return (
    <FooterS>
      <div className='container'>
        <img src='/challenge-web/images/logo.svg' alt='' />
        <FooterWrapper>
          <div className='huddle'>
            <br />
            <I className='fas fa-map-marker-alt'>
              <span style={{ marginRight: '17px' }}></span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </I>
            <br />
            <I className='fas fa-phone-volume'>
              <span style={{ marginRight: '17px' }}></span>
              Lorem ipsum dolor sit amet.
            </I>
            <br />
            <I className='far fa-envelope'>
              <span style={{ marginRight: '17px' }}></span>
              Lorem, ipsum dolor.
            </I>
          </div>
          <Ul>
            <Li>Home</Li>
            <Li>Home</Li>
            <Li>Home</Li>
            <Li>Home</Li>
            <Li>Home</Li>
            <Li>Home</Li>
          </Ul>
          <Social>
            <i className='fab fa-facebook social-media'></i>
            <i className='fab fa-github social-media'></i>
            <i className='fab fa-linkedin social-media'></i>
          </Social>
        </FooterWrapper>
      </div>
    </FooterS>
  );
};

export default Footer;
