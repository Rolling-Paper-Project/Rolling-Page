import axios, { AxiosResponse } from "axios";
import * as React from "react";
import { useParams } from "react-router";
import Container from "../../components/container/Container";
import { TOKEN, BASE_URL } from "../../constants";

interface BoardDataResponse {
  data: string[];
  boardData: { content: string; id: string };
}

const Board = () => {
  const { id } = useParams();

  const [boardData, setBoardData] = React.useState<BoardDataResponse["data"]>(
    [],
  );

  React.useEffect(() => {
    const setBoard = async () => {
      try {
        const res: AxiosResponse<any> = await axios.get(
          `${BASE_URL}/post/${id}`,
          {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
              "Content-type": "application/json",
            },
          },
        );
        console.log(res);
        setBoardData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    setBoard();
  }, []);

  return (
    <>
      <Container />
      <div />
    </>
  );
};

export { Board, BoardDataResponse };
