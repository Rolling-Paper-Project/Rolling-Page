import axios, { AxiosResponse } from "axios";
import * as React from "react";
import { ACCOUNTNAME, TOKEN, BASE_URL } from "../../constants";
import Header from "../../components/header/Header";
import { BoardWrap } from "../board/style";
import { MainContainer, BoardLink, MainExp } from "./style";

const Main = () => {
  interface BoardDataProps {
    id: string;
    content: string;
  }
  interface BoardDataResponse {
    post: BoardDataProps[];
  }
  const [boardData, setBoardData] = React.useState<BoardDataResponse>();

  React.useEffect(() => {
    const getBoardList = async () => {
      try {
        const res: AxiosResponse<any> = await axios.get(
          `${BASE_URL}/post/${ACCOUNTNAME}/userpost/`,
          {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
              "Content-type": "application/json",
            },
          },
        );
        setBoardData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBoardList();
  }, []);

  return (
    <>
      <Header />
      <BoardWrap>
        <MainContainer>
          <MainExp>이름을 클릭해서 롤링페이지를 작성해주세요 💚</MainExp>
          {boardData?.post?.map(data => (
            <BoardLink
              to={`/board/${data.id}`}
              key={data.id}
              state={{ boardTitle: data.content }}
            >
              {data.content}
            </BoardLink>
          ))}
        </MainContainer>
      </BoardWrap>
    </>
  );
};

export default Main;
