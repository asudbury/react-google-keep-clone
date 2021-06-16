import React from "react";
import styled from "styled-components";
import keepLogo from "../assets/keep-logo.579de524.png";
import firebaseLogo from "..//assets/firebase-logo.c24b6b9c.png";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 25px;
  border-bottom: 1px solid rgba(60, 64, 67, 0.2);
`;
const ImgWrap = styled.div`
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
`;

const Header = () => {
  return (
    <Nav>
      <Img src={keepLogo} alt="Google keep logo" />
      <p>Adrian's Google Keep Clone</p>
      <ImgWrap>
        <Img src={firebaseLogo} alt="firebase logo" />
      </ImgWrap>
    </Nav>
  );
};

export default Header;
