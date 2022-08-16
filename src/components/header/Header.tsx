import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import {
  HeaderWrap,
  HeaderContent,
  LinkButton,
  LogoImg,
  GitImg,
} from "./headerStyle";
import logo from "../../assets/icon-logo.svg";
import github from "../../assets/icon-github.svg";

const Header = () => {
  const onClick = () =>
    window.open("https://github.com/Rolling-Paper-Project/Rolling-Page#readme");
  const location = useLocation().pathname;

  return (
    <HeaderWrap>
      <h1 className="ir">롤링페이지</h1>
      <HeaderContent>
        <div>
          <LogoImg src={logo} alt="로고" />
        </div>
        <LinkButton onClick={onClick}>
          Contact Us
          <GitImg src={github} alt="github" />
        </LinkButton>
      </HeaderContent>
    </HeaderWrap>
  );
};

export default Header;
