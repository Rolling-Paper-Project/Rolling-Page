import styled from "styled-components"
import { EmojiImg } from "../../elements/emoji/Emoji"

export const ModalOver = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 100;
`
export const ModalWrapper = styled.div`
  width: 50%;
  min-width: 410px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  text-align: center;
`

export const ContentsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const EmojiWrapper = styled.div`
  flex: 1;
  padding: 20px;
`

export const EmojiflexBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  text-align: center;
`

export const PostWrapper = styled(EmojiWrapper)`
`

export const TitleText = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
  text-align: center;
  margin-bottom: 40px;
`

export const Img = styled(EmojiImg)`
  border-radius: 50%;
  cursor: pointer;
  box-sizing: border-box;

  :hover {
    outline: 5px solid #977ae1;
  }
`