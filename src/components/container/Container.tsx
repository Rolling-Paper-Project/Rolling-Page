import * as React from "react";
import styled from "styled-components";

import axios from "axios";
import Post from "../post/Post";
import { URL, TOKEN, ACCOUNTNAME } from "../../constants/index";

// interface ContainerProps {
//   className: string;
// }

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
`;

const TestBtn = styled.button`
  width: 50px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;
`;
const BoardPostUl = styled.ul`
  height: 520px;
  margin-bottom: 148px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0 31px;
  overflow-y: scroll;
`;
const BoardPostLi = styled.li`
  width: 250px;
  height: 250px;
  background-color: tomato;
`;
const Container = () => {
  const [toggle, setToggle] = React.useState<boolean>(false);
  const [postData, setPostData] = React.useState(null);

  const clickedToggle = () => {
    setToggle(prev => !prev);
  };

  React.useEffect(() => {
    const getPostList = async () => {
      const url = `${URL}/post/62ea2b3417ae666581a02810/comments`;
      const config = {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-type": "application/json",
        },
      };
      try {
        const res = await axios.get(url, config);
        setPostData(res.data);
        return res.data;
      } catch (err) {
        return err;
      }
    };
    getPostList();
  }, []);

  return (
    <ContainerStyled>
      <TestBtn onClick={clickedToggle}>test Button</TestBtn>
      <BoardTitleStyled>내가 설정한 보드 이름</BoardTitleStyled>
      {toggle ? (
        <BoardTextStyled>새로운 롤링페이퍼를 만들어보세요!</BoardTextStyled>
      ) : (
        <BoardPostUl>
          <Post
            bgColor="#E5EDFF"
            shadowColor="#B6CCFF"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias atque similique blanditiis temporibus itaque iure voluptas optio, cum fugiat dolor quisquam consequuntur, recusandae perspiciatis odio omnis! Magnam vero dolor fugiat."
            name="실세유진"
          />
          <Post
            bgColor="#FBF1F6"
            shadowColor="#F9CCE3"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias atque similique blanditiis temporibus itaque iure voluptas optio, cum fugiat dolor quisquam consequuntur, recusandae perspiciatis odio omnis! Magnam vero dolor fugiat."
            name="실세유진"
          />
          <Post
            bgColor="#EAE7F5"
            shadowColor="#CBC2FA"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias atque similique blanditiis temporibus itaque iure voluptas optio, cum fugiat dolor quisquam consequuntur, recusandae perspiciatis odio omnis! Magnam vero dolor fugiat."
            name="실세유진"
          />
          <Post
            bgColor="#FCF6D8"
            shadowColor="#FCEEAB"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias atque similique blanditiis temporibus itaque iure voluptas optio, cum fugiat dolor quisquam consequuntur, recusandae perspiciatis odio omnis! Magnam vero dolor fugiat."
            name="실세유진"
          />
          <BoardPostLi />
          <BoardPostLi />
          <BoardPostLi />
          <BoardPostLi />
          <BoardPostLi />
          <BoardPostLi />
          <BoardPostLi />
          <BoardPostLi />
          <BoardPostLi />
          <BoardPostLi />
          <BoardPostLi />
          <BoardPostLi />
          <BoardPostLi />
          <BoardPostLi />
          <BoardPostLi />
        </BoardPostUl>
      )}
      <BoardButtonStyled>+</BoardButtonStyled>
    </ContainerStyled>
  );
};

export default Container;

// BoardMain element
// title element (input value 가져오기)
// BoardButton element (클릭시 생성모달 출력)

// height: ${props => props.height};
//   background-color: ${props => props.bgColor};
//   color: ${props => props.color};
//   border-radius: 5px;
//   padding: ${props => props.padding};
