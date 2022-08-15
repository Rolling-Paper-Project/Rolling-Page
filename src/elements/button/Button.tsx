import * as React from "react";
import { useState, useCallback } from "react";
import { Basic, Cancel, ShareSNS, Close, Copy, ShareLinkBtn } from "./style";
import Share from "../../components/shareModal/Share";

interface BtnProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export interface ImgBtnProps {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  display?: string;
  onClick?: (event: any) => void;
}

export interface ShareLinkProps {
  onClick?: () => void;
}

const BasicBtn = ({ onClick, children }: BtnProps) => {
  return <Basic onClick={onClick}>{children}</Basic>;
};

const CancelBtn = ({ onClick, children }: BtnProps) => {
  return <Cancel onClick={onClick}>{children}</Cancel>;
};

const KakaoBtn = ({ onClick, children }: BtnProps) => {
  return <ShareSNS onClick={onClick}>카카오톡으로 공유하기</ShareSNS>;
};

const CloseBtn = ({
  top,
  bottom,
  left,
  right,
  display,
  onClick,
}: ImgBtnProps) => {
  return (
    <Close
      top={top ?? top}
      bottom={bottom ?? bottom}
      left={left ?? left}
      right={right ?? right}
      onClick={onClick}
      display={display ?? display}
    />
  );
};

const CopyBtn = ({
  top,
  bottom,
  left,
  right,
  display,
  onClick,
}: ImgBtnProps) => {
  return (
    <Copy
      top={top ?? top}
      bottom={bottom ?? bottom}
      left={left ?? left}
      right={right ?? right}
      onClick={onClick}
      display={display ?? display}
    />
  );
};

const ShareLinkToWriter = () => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <>
      <ShareLinkBtn onClick={onClickToggleModal}>
        친구와 함께 작성하기
      </ShareLinkBtn>
      {isOpenModal ? (
        <Share
          onClickToggleModal={onClickToggleModal}
          selecteURL={window.location.href}
        >
          {window.location.href}
        </Share>
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

  const url = window.location.toString();
  const doneUrl = url.replace("board", "done");
  return (
    <>
      <ShareLinkBtn onClick={onClickToggleModal}>
        완성된 롤링페이지 선물하기
      </ShareLinkBtn>
      {isOpenModal ? (
        <Share onClickToggleModal={onClickToggleModal} selecteURL={doneUrl}>
          {doneUrl}
        </Share>
      ) : (
        <span />
      )}
    </>
  );
};

export { BasicBtn, CancelBtn, KakaoBtn, CloseBtn, CopyBtn, ShareLinkToWriter, ShareLinkToReceiver };
