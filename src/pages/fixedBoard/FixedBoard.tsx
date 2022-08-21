import * as React from "react";
import Container from "../../components/container/Container";
import Header from "../../components/header/Header";
import { BoardWrap } from "../board/style";

const FixedBoard = () => {
  return (
    <>
      <Header />
      <BoardWrap>
        <Container />
      </BoardWrap>
    </>
  );
};

export default FixedBoard;
