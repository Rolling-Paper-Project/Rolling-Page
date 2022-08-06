import * as React from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { Emoji } from "../../elements/emoji/Emoji";
import CloseBtn from "../../assets/icon-close.svg";
import DeletModal from "../deleteModal/DeleteModal";
import ContentInput from "../contentsInput/ContentsInput";
import AuthorInput from "../authorInput/AuthorInput";

interface PostProps {
  key?: string;
  commentId?: string;
  bgColor: string;
  shadowColor: string;
  content?: string;
  name?: string;
  profile: string;
  // onClick?: () => void;
  author: string;
  mainTxt: string;
  isInput?: boolean;
  setAuthor?: React.Dispatch<React.SetStateAction<string>> | undefined;
  setMainTxt?: React.Dispatch<React.SetStateAction<string>> | undefined;
  setPost: () => void;
}

const PostArticle = styled.article<{ bgColor: string }>`
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

const PostContent = styled.p`
  font-size: 14px;
  word-break: break-all;
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

const PostCloseBtn = styled.img`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;

const Post = ({
  key,
  commentId,
  bgColor,
  shadowColor,
  content,
  name,
  profile,
  isInput,
  setAuthor,
  author,
  setMainTxt,
  mainTxt,
  setPost,
}: PostProps): JSX.Element => {
  const location = useLocation();

  const done =
    location.pathname.split("/")[1] === "done" ? "hidden" : undefined;
  const [isModalState, setIsModalState] = React.useState<boolean>(false);

  const ShowDeleteModal = (): void => {
    setIsModalState(!isModalState);
  };

  const closeDeleteModal = (): void => {
    setIsModalState(false);
  };

  return (
    <>
      <PostArticle bgColor={isInput ? "#FBF1F6" : bgColor}>
        <h3 className="ir">{name}님의 포스트잇</h3>
        {isInput ? (
          <ContentInput setMainTxt={setMainTxt} mainTxt={mainTxt} />
        ) : (
          <PostContent>{content}</PostContent>
        )}
        <PostFooter>
          {isInput ? (
            <>
              <Emoji width={40} height={40} src={profile} />
              <AuthorInput setAuthor={setAuthor} author={author} />
            </>
          ) : (
            <>
              <Emoji width={40} height={40} src={profile} />
              <PostNickname>{name}</PostNickname>
            </>
          )}
        </PostFooter>
        <PostEdge shadowColor={isInput ? "#FED0E8" : shadowColor} />
        {!isInput && (
          <PostCloseBtn
            className={done}
            alt="포스트 삭제"
            width={15}
            height={15}
            src={CloseBtn}
            onClick={ShowDeleteModal}
          />
        )}
      </PostArticle>
      {isModalState && (
        <DeletModal
          key={key}
          closeDeleteModal={closeDeleteModal}
          setPost={setPost}
          commentId={commentId}
        />
      )}
    </>
  );
};

export default Post;
