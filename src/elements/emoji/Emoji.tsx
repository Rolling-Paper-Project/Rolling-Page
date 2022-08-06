import React from "react";
import styled from "styled-components";

interface Props {
  width: number;
  height: number;
  src: string;
  key?: string;
}

export const EmojiImg = styled.img<{ width: number; height: number }>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

export const Emoji = ({ width, height, src, key }: Props): JSX.Element => {
  return <EmojiImg width={width} height={height} src={src} key={key ?? key} />;
};
