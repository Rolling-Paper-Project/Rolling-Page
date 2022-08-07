import * as React from "react";
import styled from "styled-components";
import Container from "../../components/container/Container";
import Header from "../../components/Header/Header";
import TitleInput from "../../components/titleInput/TitleInput";

export const BoardWrap = styled.div`
  background-color: #fffafc;
  height: 100vh;
  padding-top: 15px;
  @media (max-width: 420px) {
    height: 100%;
    background-color: #fffafc;
    padding-top: 0;
  }
`;
const Board = () => {
  return (
    <>
      <Header />
      <BoardWrap>
        <TitleInput />
        <Container post={[]} />
      </BoardWrap>
    </>
  );
};

export default Board;
