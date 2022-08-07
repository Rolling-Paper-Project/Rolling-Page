import axios from "axios";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useParams } from "react-router";
import {
  ModalWrapper,
  ContentsWrapper,
  ContentBox,
  TitleText,
  Img,
  EmojiflexBox,
  ModalOver,
  PostMargin,
} from "./emojiModalStyle";
import { BasicBtn } from "../../hooks/buttons/button";

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

const EmojiModal: React.FC<ModalProps> = ({
  setIsModalShow,
  isModalShow,
  setPostData,
  setPost,
}) => {
  const { id } = useParams();

  // Post 추가 API
  const [mainTxt, setMainTxt] = React.useState<string>("");
  const [author, setAuthor] = React.useState<string>("");
  const [profileEmoji, setProfileEmoji] = useState<string>(CUTE);
  const contents = [mainTxt, author, profileEmoji];

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

  const closeModal = (event: React.MouseEvent<HTMLDivElement>) => {
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

  return (
    <ModalOver onClick={closeModal} className={isModalShow ? "" : "hide"}>
      <ModalWrapper>
        <ContentsWrapper>
          <ContentBox>
            <TitleText>1. 스티커를 골라볼까요?</TitleText>
            <EmojiflexBox>
              <Img
                width={100}
                height={100}
                src={CUTE ?? CUTE}
                onClick={addImgPath}
              />
              <Img
                width={100}
                height={100}
                src={SAD}
                onClick={addImgPath}
              />
              <Img
                width={100}
                height={100}
                src={SADFUNNY}
                onClick={addImgPath}
              />
              <Img
                width={100}
                height={100}
                src={HAPPY}
                onClick={addImgPath}
              />
              <Img
                width={100}
                height={100}
                src={TEASING}
                onClick={addImgPath}
              />
              <Img
                width={100}
                height={100}
                src={ANGRY}
                onClick={addImgPath}
              />
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
        <BasicBtn onClick={addPost}>저장</BasicBtn>
      </ModalWrapper>
    </ModalOver>
  );
};

export default EmojiModal;
