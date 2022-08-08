import styled from "styled-components";
import { EmojiImg } from "../../elements/emoji/Emoji";

export const ModalOver = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

export const ModalWrapper = styled.div`
  width: 50%;
  min-width: 410px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 70px 50px;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  text-align: center;
`;

export const DeleteBox = styled.div`
  position: relative;
  float: right;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  margin-bottom: 30px;
`;

export const ContentBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const EmojiflexBox = styled.div`
  max-width: 300px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: auto;
`;

export const TitleText = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
  text-align: center;
  margin-bottom: 40px;
`;

export const Img = styled(EmojiImg) <{ src: string, profileEmoji: string }>`
  border-radius: 50%;
  cursor: pointer;
  box-sizing: border-box;
  outline: ${(props) => (
    props.profileEmoji === props.src ? "5px solid #977ae1" : "none")};
`;

export const PostMargin = styled.div`
  display: flex;
  justify-content: center;
  min-width: 300px;
  margin: 0 auto;
`;
