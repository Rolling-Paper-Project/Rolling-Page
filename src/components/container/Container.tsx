/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/rules-of-hooks */
import * as React from "react";
import { useParams, useLocation } from "react-router";
import { useQueries } from "react-query";
import { getBoardTitle, getPostData } from "../../apis/posts";
import Post from "../post/Post";
import EmojiModal from "../emojiModal/EmojiModal";
import colorPicker from "./colorPicker";
import {
  ContainerStyled,
  BoardButtonStyled,
  BoardHeaderStyled,
  BoardPostUl,
  BoardPrevButtonStyled,
  BoardTitleStyled,
  TitleModifyBtn,
  BoardTitleInput
} from "./style";

const Container = () => {
  const [countData, setCountData] = React.useState(0);
  const [prevData, setPrevData] = React.useState("block");
  const [prevBtnVal, setPrevBtnVal] = React.useState("완성본 미리보기");

  const setPrev = () => {
    setCountData(countData + 1);

    if (countData % 2 === 0) {
      setPrevData("hidden");
      setPrevBtnVal("다시 수정하기");
    } else {
      setPrevData("block");
      setPrevBtnVal("완성본 미리보기");
    }
  };

  const [isModalShow, setIsModalShow] = React.useState<boolean>(false);

  const handleAddPostBtn = () => {
    setIsModalShow(true);
  };

  const { id } = useParams();
  const location = useLocation();
  const done =
    location.pathname.split("/")[1] === "done" ? "hidden" : undefined;

  const apis = [
    { queryKey: "getBoardTitle", queryFn: getBoardTitle },
    { queryKey: "getPostData", queryFn: getPostData },
  ];

  const [titleData, postsData] = useQueries(
    apis.map(api => {
      return {
        queryKey: [api.queryKey],
        queryFn: () => api.queryFn(id ?? ""),
        // id가 존재할 때만 쿼리 요청 실행
        enabled: !!id,
        refetchOnWindowFocus: false,
      };
    }),
  );

  const [isDisplay, setIsDisplay] = React.useState<boolean>(true);
  const [btnName, setBtnName] = React.useState<string>("타이틀 수정하기");
  const handleModifyBtn = () => {
    if (isDisplay === true) {
      setBtnName("수정 완료");
    } else {
      setBtnName("타이틀 수정하기");
    }
    setIsDisplay(!isDisplay);
  };

  return (
    <ContainerStyled>
      <BoardHeaderStyled>
        {
          isDisplay &&
          <BoardTitleStyled>
            {titleData.data && titleData.data.content}
          </BoardTitleStyled>
        }
        {
          !isDisplay &&
          <BoardTitleInput
            isInput
            height="auto"
            bgColor="#EFEFEF"
            placeholder={titleData.data && titleData.data.content}
            id="title"
            padding="10px"
            fontSize="20px"
            fontWeight="600" />
        }
        <TitleModifyBtn className={done || prevData} onClick={handleModifyBtn}>
          {btnName}
        </TitleModifyBtn>
        <BoardPrevButtonStyled className={done} onClick={setPrev}>
          {prevBtnVal}
        </BoardPrevButtonStyled>
      </BoardHeaderStyled>
      <BoardPostUl>
        {postsData.data &&
          postsData.data.map((post: any) => {
            const text = post.content.split("☇⚁♘");
            const [bgColor, shadowColor] = colorPicker();
            return (
              <Post
                key={post.id}
                postId={post.id}
                content={text[0]}
                name={text[1]}
                profile={text[2]}
                isInput={false}
                author=""
                mainTxt=""
                prevData={prevData}
                bgColor={bgColor}
                shadowColor={shadowColor}
              />
            );
          })}
      </BoardPostUl>
      <BoardButtonStyled
        className={done || prevData}
        onClick={handleAddPostBtn}
      >
        +
      </BoardButtonStyled>
      <EmojiModal setIsModalShow={setIsModalShow} isModalShow={isModalShow} />
    </ContainerStyled>
  );
};

export default Container;
