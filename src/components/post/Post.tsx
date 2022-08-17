import * as React from "react";
import { useLocation } from "react-router";
import {
  PostArticle,
  PostContent,
  PostFooter,
  PostNickname,
  PostEdge,
  PostCloseBtn,
} from "./style";

import Emoji from "../../elements/image/Image";
import CloseBtn from "../../assets/icon-close.svg";
import DeletModal from "../deleteModal/DeleteModal";
import ContentInput from "../contentsInput/ContentsInput";
import AuthorInput from "../authorInput/AuthorInput";

interface PostProps {
  commentId?: string;
  bgColor: string;
  shadowColor: string;
  content?: string;
  name?: string;
  profile: string;
  author: string;
  mainTxt: string;
  isInput?: boolean;
  setAuthor?: React.Dispatch<React.SetStateAction<string>> | undefined;
  setMainTxt?: React.Dispatch<React.SetStateAction<string>>;
  prevData?: string;
  setPost: () => void;
}

const Post = ({
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
  prevData,
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
          <PostContent className="content">{content}</PostContent>
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
            className={done || prevData}
            position="absolute"
            top="8px"
            right="8px"
            width="15px"
            height="15px"
            src={CloseBtn}
            onClick={ShowDeleteModal}
          >
            <span className="ir">포스트 삭제 버튼</span>
          </PostCloseBtn>
        )}
      </PostArticle>
      {isModalState && (
        <DeletModal
          closeDeleteModal={closeDeleteModal}
          setPost={setPost}
          commentId={commentId}
        />
      )}
    </>
  );
};

export default Post;
