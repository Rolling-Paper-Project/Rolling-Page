import * as React from "react";

import Container from "../../components/container/Container";
import Header from "../../components/header/Header";
import {
  ShareLinkToWriter,
  ShareLinkToReceiver,
} from "../../elements/button/Button";
import { BoardWrap, ShareLinkBox } from "./style";

const Board = () => {
  return (
    <>
      <Header />
      <BoardWrap>
        <Container />
        <ShareLinkBox>
          <ShareLinkToReceiver />
          <ShareLinkToWriter />
        </ShareLinkBox>
      </BoardWrap>
    </>
  );
};

export default Board;