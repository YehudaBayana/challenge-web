import React from 'react';
import styled, { css } from 'styled-components';

const MyNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  border-radius: 50px;
  padding: 14px 55px;
  font-size: 16px;
  font-weight: 800;
  background-color: white;
  color: darkslateblue;
  box-shadow: 1px 1px 15px lightgray;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  ${(props) => {
    return props.pink
      ? css`
          background-color: hsl(322, 100%, 66%);
          color: white;
          font-size: 13px;
          padding: 14px 65px;
        `
      : null;
  }}
  @media (max-width:500px) {
    padding: 7px 32px;
  }
`;
const Img = styled.img`
  @media (max-width: 500px) {
    width: 30%;
  }
`;
const Navbar = () => {
  return (
    <MyNavbar>
      <Img src='/challenge-web/images/logo.svg' alt='' />
      <Button>try it free</Button>
    </MyNavbar>
  );
};

export default Navbar;
