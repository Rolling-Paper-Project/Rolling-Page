import React from 'react'
import { ModalWrapper, EmojiWrapper, PostWrapper, TitleText, Img, EmojiflexBox, ModalOver, ContentsWrapper } from './emojiModalStyle'
import { BasicBtn } from '../../elements/buttons/button'
import Emoji1 from "../../assets/emoji-cute.svg"
import Emoji2 from "../../assets/emoji-sad.svg"
import Emoji3 from "../../assets/emoji-sad-fun.svg"
import Emoji4 from "../../assets/emoji-happy.svg"
import Emoji5 from "../../assets/emoji-teasing.svg"
import Emoji6 from "../../assets/emoji-angry.svg"
import Post from '../post/Post'

const EmojiModal = () => {
  return (
    <ModalOver>
      <ModalWrapper>
        <ContentsWrapper>
          <EmojiWrapper>
            <TitleText>1. 스티커를 골라볼까요?</TitleText>
            <EmojiflexBox>
              <Img src={Emoji1} />
              <Img src={Emoji2} />
              <Img src={Emoji3} />
              <Img src={Emoji4} />
              <Img src={Emoji5} />
              <Img src={Emoji6} />
            </EmojiflexBox>
          </EmojiWrapper>
          <PostWrapper>
            <TitleText>2. 내용을 작성해봅시다!</TitleText>
            <Post />
          </PostWrapper>
        </ContentsWrapper>
        <BasicBtn onClick={() => console.log()} />
      </ModalWrapper>
    </ModalOver>
  )
}

export default EmojiModal;
