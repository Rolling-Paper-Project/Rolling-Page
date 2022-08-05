/* eslint-disable react-hooks/rules-of-hooks */
import * as React from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import axios, { AxiosResponse } from "axios";

import Post from "../post/Post";
import { BASE_URL, TOKEN, ACCOUNTNAME } from "../../constants/index";

interface PostDataProps {
  id: string;
  content: string;
}

interface PostDataResponse {
  post: PostDataProps[];
}

interface TitleProps {
  done?: string | undefined;
}

const ContainerStyled = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 1400px;
  height: 750px;
  margin: 0 auto;
  border: 1px solid #efefef;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);
`;

const BoardTitleStyled = styled.h2`
  width: fit-content;
  font-weight: 300;
  font-size: 35px;
  line-height: 44px;
  color: #977ae1;
  padding: 16px 0 24px 31px;
`;

const BoardTextStyled = styled.div`
  width: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 400;
  font-size: 22px;
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
`;

const Container = ({ done }: TitleProps) => {
  const { id } = useParams();
  const [postData, setPostData] = React.useState<PostDataResponse["post"]>([]);
  const colorArray = [
    "#E5EDFF, #B6CCFF",
    "#FBF1F6, #F9CCE3",
    "#EAE7F5, #CBC2FA",
    "#FCF6D8, #FCEEAB",
  ];

  const setPost = async () => {
    const url = `${BASE_URL}/post/${id}/comments`;
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

  return (
    <ContainerStyled>
      <BoardTitleStyled>내가 설정한 보드 이름</BoardTitleStyled>
      {/* <BoardTextStyled>새로운 롤링페이퍼를 만들어보세요!</BoardTextStyled> */}
      <BoardPostUl>
        {postData?.map(element => {
          const randomIdx = Math.floor(Math.random() * 3 + 1);
          const randomColor = colorArray[randomIdx].split(",");
          const bgColor = randomColor[0];
          const shadowColor = randomColor[1];
          const comment = element.content.split(",");
          const content = comment[0];
          const name = comment[1];
          const profile = comment[2];

          return (
            <Post
              key={element.id}
              bgColor={bgColor}
              shadowColor={shadowColor}
              content={content}
              name={name}
              profile={profile}
            />
          );
        })}
      </BoardPostUl>
      <BoardButtonStyled className={done}>+</BoardButtonStyled>
    </ContainerStyled>
  );
};

export default Container;
