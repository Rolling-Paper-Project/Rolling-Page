import axios from "axios";
import * as React from "react";
import { useParams } from "react-router";
import Container from "../../components/container/Container";
import Header from "../../components/header/Header";
import { BASE_URL, TOKEN } from "../../constants";
import { ShareLinkButton
} from "../../elements/button/Button";
import { BoardWrap, ShareLinkBox } from "./style";

const Board = () => {
  const { id } = useParams();
  const [boardTit, setBoardTit] = React.useState("");
  const url = window.location.toString();
  const doneUrl = url.replace("board", "done");

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
          <ShareLinkButton text="완성된 롤링페이지 선물하기" selecteURL={doneUrl}/>
          <ShareLinkButton text="친구와 함께 작성하기" selecteURL={url}/>
        </ShareLinkBox>
      </BoardWrap>
    </>
  );
};

export default Board;
