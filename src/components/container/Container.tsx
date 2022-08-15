/* eslint-disable react-hooks/rules-of-hooks */
import * as React from "react";
import { useParams, useLocation } from "react-router";
import axios from "axios";
import Post from "../post/Post";
import { BASE_URL, TOKEN } from "../../constants/index";
import EmojiModal from "../emojiModal/EmojiModal";
import {
  ContainerStyled,
  BoardButtonStyled,
  BoardHeaderStyled,
  BoardPostUl,
  BoardPrevButtonStyled,
  BoardTitleStyled,
} from "./style";

interface PostDataProps {
  id: string;
  content: string;
}
interface TitleProps {
  // eslint-disable-next-line react/no-unused-prop-types
  post?: PostDataProps[];
  boardTit: string;
}

const Container = ({ boardTit }: TitleProps) => {
  const { id } = useParams();
  const [postData, setPostData] = React.useState<
    TitleProps["post"] | undefined
  >();
  const [countData, setCountData] = React.useState(0);
  const [prevData, setPrevData] = React.useState("block");
  const [prevBtnVal, setPrevBtnVal] = React.useState("완성본 미리보기");
  const colorArray = [
    "#E5EDFF, #B6CCFF",
    "#FBF1F6, #F9CCE3",
    "#EAE7F5, #CBC2FA",
    "#FCF6D8, #FCEEAB",
  ];

  const setPrev = (): void => {
    setCountData(countData + 1);

    if (countData % 2 === 0) {
      setPrevData("hidden");
      setPrevBtnVal("다시 수정하기");
    } else {
      setPrevData("block");
      setPrevBtnVal("완성본 미리보기");
    }
  };

  // const location = useLocation().state as BoardTitle;

  const setPost = async () => {
    const url = `${BASE_URL}/post/${id}/comments/?limit=100`;
    const config = {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-type": "application/json",
      },
    };
    try {
      const res = await axios.get(url, config);
      setPostData(res.data.comments);
      return res.data.comments;
    } catch (err) {
      return err;
    }
  };

  React.useEffect(() => {
    setPost();
  }, []);

  const [isModalShow, setIsModalShow] = React.useState<boolean>(false);

  const handleAddPostBtn = () => {
    setIsModalShow(true);
  };
  const location = useLocation();
  const done =
    location.pathname.split("/")[1] === "done" ? "hidden" : undefined;

  return (
    <ContainerStyled>
      <BoardHeaderStyled>
        <BoardTitleStyled>{boardTit}</BoardTitleStyled>
        <BoardPrevButtonStyled className={done} onClick={setPrev}>
          {prevBtnVal}
        </BoardPrevButtonStyled>
      </BoardHeaderStyled>
      <BoardPostUl>
        {postData?.map(element => {
          const randomIdx = Math.floor(Math.random() * 3 + 1);
          const randomColor = colorArray[randomIdx].split(",");
          const bgColor = randomColor[0];
          const shadowColor = randomColor[1];
          const comment = element.content.split("☇⚁♘");
          const content = comment[0];
          const name = comment[1];
          const profile = comment[2];
          return (
            <Post
              key={element.id}
              commentId={element.id}
              bgColor={bgColor}
              shadowColor={shadowColor}
              content={content}
              name={name}
              profile={profile}
              isInput={false}
              author=""
              mainTxt=""
              setPost={setPost}
              prevData={prevData}
            />
          );
        })}
      </BoardPostUl>
      <BoardButtonStyled
        className={done || prevData}
        onClick={handleAddPostBtn}
      >
        +
      </BoardButtonStyled>
      <EmojiModal
        setIsModalShow={setIsModalShow}
        isModalShow={isModalShow}
        setPostData={setPostData}
        setPost={setPost}
      />
    </ContainerStyled>
  );
};

export default Container;
