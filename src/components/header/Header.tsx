import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <LogoImg src={logo} alt="로고" />
        </Link>
        <LinkButton onClick={onClick}>
          Contact Us
          <img src={github} alt="github" />
        </LinkButton>
      </HeaderContent>
    </HeaderWrap>
  );
};

export default Header;
