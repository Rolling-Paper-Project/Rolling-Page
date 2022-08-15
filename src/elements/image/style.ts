import styled from "styled-components";

const EmojiImg = styled.img<{ width: number; height: number }>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

export default EmojiImg;