/* eslint-disable react-hooks/rules-of-hooks */
import * as React from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import axios from "axios";
import Post from "../post/Post";
import { BASE_URL, TOKEN } from "../../constants/index";
import EmojiModal from "../emojiModal/EmojiModal";

interface PostDataProps {
  id: string;
  content: string;
}
interface TitleProps {
  done?: string | undefined;
  // eslint-disable-next-line react/no-unused-prop-types
  post?: PostDataProps[];
}

export const ContainerStyled = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 1400px;
  height: 750px;
  margin: 0 auto;
  border: 1px solid #efefef;
  background-color: white;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);
  @media (max-width: 420px) {
    width: 100%;
    border: none;
    box-shadow: none;
  }
`;

const BoardTitleStyled = styled.h2`
  width: fit-content;
  font-weight: 600;
  font-size: 40px;
  line-height: 44px;
  color: #977ae1;
  padding: 46px 0 24px 31px;
  @media (max-width: 420px) {
    font-size: 20px;
    padding: 15px 0 10px 10px;
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
  bottom: 29px;
  right: 48px;
  cursor: pointer;
`;

const BoardPostUl = styled.ul`
  height: 520px;
  margin-bottom: 148px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0 30px;
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
  @media (max-width: 420px) {
    justify-content: center;
  }
`;

const Container = ({ done }: TitleProps) => {
  const { id } = useParams();
  const [postData, setPostData] = React.useState<
    TitleProps["post"] | undefined
  >();
  const colorArray = [
    "#E5EDFF, #B6CCFF",
    "#FBF1F6, #F9CCE3",
    "#EAE7F5, #CBC2FA",
    "#FCF6D8, #FCEEAB",
  ];

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

  return (
    <ContainerStyled>
      <BoardTitleStyled>내가 설정한 보드 이름</BoardTitleStyled>
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
            />
          );
        })}
      </BoardPostUl>
      <BoardButtonStyled className={done} onClick={handleAddPostBtn}>
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
