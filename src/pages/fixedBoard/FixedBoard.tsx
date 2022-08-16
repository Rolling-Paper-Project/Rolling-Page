import axios from "axios";
import * as React from "react";
import { useParams } from "react-router";
import Container from "../../components/container/Container";
import Header from "../../components/header/Header";
import { BASE_URL, TOKEN } from "../../constants";
import { BoardWrap } from "../board/style";

const FixedBoard = () => {
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
        <Container post={[]} boardTit={boardTit} />
      </BoardWrap>
    </>
  );
};

export default FixedBoard;
