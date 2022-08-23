import axios, { AxiosResponse } from "axios";
import * as React from "react";
import Header from "../../components/header/Header";
import { BoardWrap } from "../board/style";
import { MainContainer } from "./style";
import TitleInput from "../../components/titleInput/TitleInput";

const Main = () => {
  return (
    <>
      <Header />
      <BoardWrap>
        <TitleInput />
        <MainContainer>사용법 안내 문구가 들어갑니다</MainContainer>
      </BoardWrap>
    </>
  );
};

export default Main;
