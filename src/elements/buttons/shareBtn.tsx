import * as React from "react";
import { useState, useCallback } from "react";
import styled from "styled-components";
import Share from "../../components/modals/Share";

const ShareLinkBtn = styled.button`
  font-size: 20px;
  font-weight: 700;
  line-height: 44px;
  color: #d4caed;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #d4caed;
  &:hover {
    transform: translateY(-1px);
  }
`;

const ShareLinkToWriter = () => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <>
      <ShareLinkBtn onClick={onClickToggleModal}>
        작성 링크 공유하기
      </ShareLinkBtn>
      {isOpenModal ? (
        <Share onClickToggleModal={onClickToggleModal} />
      ) : (
        <span />
      )}
    </>
  );
};

const ShareLinkToReceiver = () => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <>
      <ShareLinkBtn onClick={onClickToggleModal}>
        완성된 롤링페이지 공유하기
      </ShareLinkBtn>
      {isOpenModal ? (
        <Share onClickToggleModal={onClickToggleModal} />
      ) : (
        <span />
      )}
    </>
  );
};

export { ShareLinkToWriter, ShareLinkToReceiver };
