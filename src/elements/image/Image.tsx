import React from "react";
import EmojiImg from "./style";

interface Props {
  width: number;
  height: number;
  src: string;
  key?: string;
}

const Image = ({ width, height, src, key }: Props): JSX.Element => {
  return (
    <EmojiImg
      width={width}
      height={height}
      src={src}
      key={key ?? key}
    />
  );
};


export default Image;
