import styled from "styled-components";

const PostArticle = styled.article<{ bgColor: string }>`
  width: 250px;
  height: 250px;
  clip-path: polygon(100% 0, 100% 100%, 15% 100%, 0 85%, 0 0);
  padding: 30px 14px 19px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.bgColor};
`;

const PostContent = styled.pre`
  width: 222px;
  word-break: break-all;
  font-weight: 400;
  line-height: 20px;
  white-space: pre-line;
  overflow-wrap: break-word;
`;

const PostFooter = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: center;
`;

const PostNickname = styled.strong`
  font-size: 18px;
  font-weight: bold;
`;

const PostEdge = styled.div<{ shadowColor: string }>`
  position: absolute;
  bottom: 0;
  left: 0px;
  width: 38px;
  height: 38px;
  clip-path: polygon(0 0, 95% 5%, 100% 100%);
  background-color: ${props => props.shadowColor};
`;

const PostCloseBtn = styled.img<{ prevData?: string }>`
  display: ${props => props.prevData};
  width: 15px;
  height: 15px;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;

export {
  PostArticle,
  PostContent,
  PostFooter,
  PostNickname,
  PostEdge,
  PostCloseBtn,
};
