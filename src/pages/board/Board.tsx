import * as React from "react";
import styled from "styled-components";
import Container from "../../components/container/Container";
import Header from "../../components/Header/Header";
import TitleInput from "../../components/titleInput/TitleInput";

const BoardWrap = styled.div`
  background-color: #fffafc;
  height: 100vh;
  padding-top: 15px;
`;
const Board = () => {
  return (
    <>
<<<<<<< HEAD
      <Container />
      <div />
=======
      <Header />
      <BoardWrap>
        <TitleInput />
        <Container post={[]} />
      </BoardWrap>
>>>>>>> 6c68983ef3fa19cf3de6d3d7dd51c37fb939d7b4
    </>
  );
};

export default Board;
