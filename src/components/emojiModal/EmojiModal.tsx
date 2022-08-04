import React from 'react'
import { ModalWrapper, EmojiWrapper, PostWrapper, TitleText, Img, EmojiflexBox, ModalOver, ContentsWrapper } from "./emojiModalStyle"
import { BasicBtn } from "../../elements/buttons/button"
import Emoji from "../../elements/emoji/Emoji"
import Post from "../post/Post"
import Emoji1 from "../../assets/emoji-cute.svg"
import Emoji2 from "../../assets/emoji-sad.svg"
import Emoji3 from "../../assets/emoji-sad-fun.svg"
import Emoji4 from "../../assets/emoji-happy.svg"
import Emoji5 from "../../assets/emoji-teasing.svg"
import Emoji6 from "../../assets/emoji-angry.svg"

const EmojiModal = () => {
  return (
    <ModalOver>
      <ModalWrapper>
        <ContentsWrapper>
          <EmojiWrapper>
            <TitleText>1. 스티커를 골라볼까요?</TitleText>
            <EmojiflexBox>
              <Img width={100} height={100} src={Emoji1} />
              <Img width={100} height={100} src={Emoji2} />
              <Img width={100} height={100} src={Emoji3} />
              <Img width={100} height={100} src={Emoji4} />
              <Img width={100} height={100} src={Emoji5} />
              <Img width={100} height={100} src={Emoji6} />
            </EmojiflexBox>
          </EmojiWrapper>
          <PostWrapper>
            <TitleText>2. 내용을 작성해봅시다!</TitleText>
            <Post />
          </PostWrapper>
        </ContentsWrapper>
        <BasicBtn>저장</BasicBtn>
      </ModalWrapper>
    </ModalOver>
  )
}

export default EmojiModal;
