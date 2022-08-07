import React from "react";
import { HeaderWrap, HeaderContent, LinkButton, LogoImg } from "./headerStyle";
import logo from "../../assets/icon-logo.svg";
import github from "../../assets/icon-github.svg";

const Header = () => {
  const onClick = () =>
    window.open("https://github.com/Rolling-Paper-Project/Rolling-Page#readme");

  return (
    <HeaderWrap>
      <h1 className="ir">롤링페이지</h1>
      <HeaderContent>
        <LogoImg src={logo} alt="로고" />
        {/* <img src={logo} alt="로고" /> */}
        <LinkButton onClick={onClick}>
          Contact Us
          <img src={github} alt="github" />
        </LinkButton>
      </HeaderContent>
    </HeaderWrap>
  );
};

export default Header;
