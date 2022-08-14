/* eslint-disable react-hooks/rules-of-hooks */
import * as React from "react";
import styled from "styled-components";
import { useParams, useLocation } from "react-router";
import axios from "axios";
import Post from "../post/Post";
import { BASE_URL, TOKEN } from "../../constants/index";
import EmojiModal from "../emojiModal/EmojiModal";
import { Basic } from "../../elements/buttons/button";

interface PostDataProps {
  id: string;
  content: string;
}
interface TitleProps {
  // eslint-disable-next-line react/no-unused-prop-types
  post?: PostDataProps[];
  boardTit: string;
}

export const ContainerStyled = styled.div`
  height: 80vh;
  position: relative;
  max-width: 1400px;
  max-height: 750px;
  margin: 0 auto;
  border: 1px solid #efefef;
  background-color: white;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);
  padding: 40px 30px;
  @media screen and (max-width: 680px) {
    width: 100%;
    border: none;
    box-shadow: none;
    padding: 20px 10px;
  }
  @media screen and (max-width: 460px) {
    flex-direction: column;
  }
`;

const BoardHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 37px 24px 30px;
  @media (max-width: 460px) {
    flex-direction: column;
    gap: 10px;
    padding: 15px 0;
  }
`;

const BoardTitleStyled = styled.h2`
  width: fit-content;
  font-weight: 600;
  font-size: 40px;
  color: #977ae1;
  word-break: keep-all;
  @media (max-width: 680px) {
    font-size: 20px;
  }
  @media (max-width: 460px) {
    margin-bottom: 10px;
    font-size: 23px;
    text-align: center;
  }
`;

const BoardPrevButtonStyled = styled(Basic)`
  width: 150px;
  @media (max-width: 680px) {
    font-size: 16px;
  }
`;

const BoardButtonStyled = styled.button`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: white;
  background-color: #977ae1;
  font-size: 45px;
  border: none;
  bottom: 30px;
  right: 45px;
  cursor: pointer;
  @media (max-width: 680px) {
    width: 50px;
    height: 50px;
    font-size: 40px;
    bottom: 15px;
    right: 50px;
  }
`;

const BoardPostUl = styled.ul`
  height: 80%;
  margin-bottom: 148px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    background: #977ae1;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
  @media (max-width: 680px) {
    justify-content: center;
    margin-bottom: 50px;
  }
  @media (max-width: 460px) {
    margin-bottom: 30px;
  }
`;

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
