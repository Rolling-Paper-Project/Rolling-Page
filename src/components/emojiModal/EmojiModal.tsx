import axios from "axios";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useParams } from "react-router";
import closeImg from "../../assets/icon-close.svg";
import {
  ModalWrapper,
  ContentsWrapper,
  ContentBox,
  TitleText,
  Img,
  EmojiflexBox,
  ModalOver,
  PostMargin,
} from "./style";
import { BasicBtn, ImageBtn } from "../../elements/button/Button";

import Post from "../post/Post";
import {
  ANGRY,
  BASE_URL,
  CUTE,
  HAPPY,
  SAD,
  SADFUNNY,
  TEASING,
  TOKEN,
} from "../../constants";

interface PostDataProps {
  id: string;
  content: string;
}
interface ModalProps {
  setIsModalShow: Dispatch<SetStateAction<boolean>>;
  setPostData:
  | Dispatch<SetStateAction<PostDataProps[] | undefined>>
  | undefined;
  isModalShow: boolean;
  setPost: () => void;
}

const EmojiModal = ({
  setIsModalShow,
  isModalShow,
  setPostData,
  setPost,
}: ModalProps): JSX.Element => {
  const { id } = useParams();

  // Post 추가 API
  const [mainTxt, setMainTxt] = React.useState<string>("");
  const [author, setAuthor] = React.useState<string>("");
  const [profileEmoji, setProfileEmoji] = useState<string>(CUTE);
  const contents = [mainTxt, author, profileEmoji];
  const images = [CUTE ?? CUTE, SAD, SADFUNNY, HAPPY, TEASING, ANGRY];

  const addImgPath = (event: React.MouseEvent<HTMLImageElement>) => {
    event.stopPropagation();
    const img = event.currentTarget;
    setProfileEmoji(img.src);
  };

  const addModalReset = () => {
    setIsModalShow(false);
    setMainTxt("");
    setAuthor("");
    setProfileEmoji(CUTE);
  };

  const closeModal = (event: {
    stopPropagation: () => void;
    currentTarget: any;
    target: any;
  }) => {
    event.stopPropagation();
    const div = event.currentTarget;
    if (event.target === div) {
      addModalReset();
    }
  };
  const addPost = async () => {
    const text = contents.join("☇⚁♘");
    try {
      const res = await axios.post(
        `${BASE_URL}/post/${id}/comments`,
        {
          comment: {
            content: text,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-type": "application/json",
          },
        },
      );
      if (setPostData) {
        setPostData(res.data.comments);
      }
      setPost();
      addModalReset();
    } catch (error) {
      console.log(error);
    }
  };
  const onClickAddBtn = () => {
    if (mainTxt === "" || author === "") {
      window.alert("모든 값을 입력해주세요!");
    } else {
      addPost();
    }
  };

  return (
    <ModalOver className={isModalShow ? "" : "hide"}>
      <ModalWrapper>
        <ContentsWrapper>
          <ContentBox>
            <TitleText>1. 스티커를 골라볼까요?</TitleText>
            <EmojiflexBox>
              {images.map(element => (
                <Img
                  key={element}
                  width={100}
                  height={100}
                  src={element}
                  onClick={addImgPath}
                  profileEmoji={profileEmoji}
                />
              ))}
            </EmojiflexBox>
          </ContentBox>
          <ContentBox>
            <TitleText>2. 내용을 작성해봅시다!</TitleText>
            <PostMargin>
              <Post
                mainTxt={mainTxt}
                author={author}
                setMainTxt={setMainTxt}
                setAuthor={setAuthor}
                isInput
                bgColor=""
                shadowColor=""
                profile={profileEmoji}
                setPost={setPost}
              />
            </PostMargin>
          </ContentBox>
        </ContentsWrapper>
        <BasicBtn onClick={onClickAddBtn}>저장</BasicBtn>
        <ImageBtn
          position="fixed"
          top="15px"
          right="15px"
          width="25px"
          height="25px"
          src={closeImg}
          onClick={closeModal}
        ><span className="ir">닫기 버튼</span></ImageBtn>
      </ModalWrapper>
    </ModalOver>
  );
};

export default EmojiModal;
