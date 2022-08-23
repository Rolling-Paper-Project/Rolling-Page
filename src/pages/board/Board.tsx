import * as React from "react";

import Container from "../../components/container/Container";
import Header from "../../components/header/Header";
import { ShareLinkButton } from "../../elements/button/Button";
import { BoardWrap, ShareLinkBox } from "./style";

const Board = () => {
  const url = window.location.toString();
  const doneUrl = url.replace("board", "done");
  return (
    <>
      <Header />
      <BoardWrap>
        <Container />
        <ShareLinkBox>
          <ShareLinkButton
            text="완성된 롤링페이지 선물하기"
            selecteURL={doneUrl}
          />
          <ShareLinkButton text="친구와 함께 작성하기" selecteURL={url} />
        </ShareLinkBox>
      </BoardWrap>
    </>
  );
};

export default Board;
