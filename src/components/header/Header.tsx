import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import {
  HeaderWrap,
  HeaderContent,
  LinkButton,
  LogoImg,
  GitImg,
} from "./style";
import logo from "../../assets/icon-logo.svg";
import github from "../../assets/icon-github.svg";

const Header = () => {
  const location = useLocation().pathname;

  return (
    <HeaderWrap>
      <HeaderContent>
        {location.includes("done") ? (
          <div>
            <LogoImg src={logo} alt="롤링페이지" />
          </div>
        ) : (
          <Link to="/">
            <LogoImg src={logo} alt="롤링페이지" />
          </Link>
        )}
        <LinkButton
          target="_blank"
          to="https://github.com/Rolling-Paper-Project/Rolling-Page#readme"
        >
          Contact Us
          <GitImg src={github} alt="" />
        </LinkButton>
      </HeaderContent>
    </HeaderWrap>
  );
};

export default Header;
