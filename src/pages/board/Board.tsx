import * as React from "react";
import styled from "styled-components";
import Container from "../../components/container/Container";
import Header from "../../components/Header/Header";
import TitleInput from "../../components/titleInput/TitleInput";
import {
  ShareLinkToReceiver,
  ShareLinkToWriter,
} from "../../elements/buttons/shareBtn";

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

export const ShareLinkBox = styled.div`
  width: 1400px;
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
  margin: 0 auto;
  padding: 10px;
`;

const Board = () => {
  return (
    <>
      <Header />
      <BoardWrap>
        <TitleInput />
        <Container post={[]} />
        <ShareLinkBox>
          <ShareLinkToReceiver />
          <ShareLinkToWriter />
        </ShareLinkBox>
      </BoardWrap>
    </>
  );
};

export default Board;
