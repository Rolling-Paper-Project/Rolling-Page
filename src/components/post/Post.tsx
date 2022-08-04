import * as React from "react";
import styled from "styled-components";
import Emoji, { EmojiImg } from "../../elements/emoji/Emoji";
import closeBtn from "../../assets/icon-close.svg";

interface PostProps {
  bgColor?: string;
  shadowColor?: string;
  content?: string;
  name?: string;
  profile?: string;
  onClick?: () => void;
}

const PostArticle = styled.article<PostProps>`
  width: 250px;
  height: 250px;
  clip-path: polygon(100% 0, 100% 100%, 15% 100%, 0 85%, 0 0);
  padding: 27px 14px 19px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.bgColor};
`;

const PostContent = styled.p<PostProps>`
  font-size: 14px;
  word-break: break-all;
`;

const PostFooter = styled.div<PostProps>`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: center;
`;

const PostNickname = styled.strong<PostProps>`
  font-size: 18px;
  font-weight: bold;
`;

const PostEdge = styled.div<PostProps>`
  position: absolute;
  bottom: 0;
  left: 0px;
  width: 38px;
  height: 38px;
  clip-path: polygon(0 0, 95% 5%, 100% 100%);
  background-color: ${props => props.shadowColor};
`;

const PostCloseBtn = styled(EmojiImg)<PostProps>`
  position: absolute;
  top: 8px;
  right: 8px;
`;

const Post = ({
  bgColor,
  shadowColor,
  content,
  name,
  profile,
  onClick,
}: PostProps) => {
  return (
    <div>
      <PostArticle bgColor={bgColor ?? bgColor}>
        <h3 className="ir">{name}님의 포스트잇</h3>
        <PostContent>{content}</PostContent>
        <PostFooter>
          <Emoji width={40} height={40} src={profile!} />
          <PostNickname>{name}</PostNickname>
        </PostFooter>
        <PostEdge shadowColor={shadowColor ?? shadowColor} />
        <PostCloseBtn
          className="btn-base"
          alt="포스트 삭제"
          width={15}
          height={15}
          src={closeBtn}
        />
      </PostArticle>
    </div>
  );
};

export default Post;
