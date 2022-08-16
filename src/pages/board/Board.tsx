import axios from "axios";
import * as React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Container from "../../components/container/Container";
import Header from "../../components/header/Header";
import { BASE_URL, TOKEN } from "../../constants";
import {
  ShareLinkToWriter,
  ShareLinkToReceiver,
} from "../../elements/button/Button";
import { BoardWrap, ShareLinkBox } from "./style";

const Board = () => {
  const { id } = useParams();
  const [boardTit, setBoardTit] = React.useState("");
  React.useEffect(() => {
    const setBoard = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/post/${id}`, {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-type": "application/json",
          },
        });
        setBoardTit(res.data.post.content);
      } catch (error) {
        console.log(error);
      }
    };
    setBoard();
  }, []);
  return (
    <>
      <Header />
      <BoardWrap>
        {/* <TitleInput /> */}
        <Container post={[]} boardTit={boardTit} />
        <ShareLinkBox>
          <ShareLinkToReceiver />
          <ShareLinkToWriter />
        </ShareLinkBox>
      </BoardWrap>
    </>
  );
};

export default Board;
