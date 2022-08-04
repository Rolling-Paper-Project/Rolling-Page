import axios, { AxiosResponse } from "axios";
import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ACCOUNTNAME, TOKEN, BASE_URL } from "../../constants";

const BoardLink = styled(Link)``;

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
          `${BASE_URL}/post/${ACCOUNTNAME}/userpost`,
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
      <div />
      이름을 클릭해서 롤링페이지를 작성해주세요 💚
      <div />
      {boardData?.post?.map(data => (
        <BoardLink to={`/board/${data.id}`} key={data.id}>
          {data.content}
        </BoardLink>
      ))}
    </>
  );
};

export default Main;
