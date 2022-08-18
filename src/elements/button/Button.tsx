import * as React from "react";
import { useState, useCallback } from "react";
import { Basic, Cancel, ShareSNS, ShareLinkBtn, ImgBtn } from "./style";
import Share from "../../components/shareModal/Share";

interface BtnProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export interface ImgBtnProps {
  position?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  width?: string;
  height?: string;
  src: string;
  onClick?: (event: any) => void;
  children?: React.ReactNode;
}

export interface ShareLinkProps {
  onClick?: () => void;
}

const BasicBtn = ({ onClick, children }: BtnProps) => {
  return <Basic onClick={onClick}>{children}</Basic>;
};

const CancelBtn = ({ onClick, children }: BtnProps) => {
  return <Cancel onClick={onClick} type="button">{children}</Cancel>;
};

const KakaoBtn = ({ onClick, children }: BtnProps) => {
  return <ShareSNS onClick={onClick} type="button">카카오톡으로 공유하기</ShareSNS>;
};

const ImageBtn = ({
  position,
  top,
  right,
  bottom,
  left,
  width,
  height,
  src,
  onClick,
  children
}: ImgBtnProps) => {
  return (
    <ImgBtn
      position={position ?? position}
      top={top ?? top}
      right={right ?? right}
      bottom={bottom ?? bottom}
      left={left ?? left}
      width={width ?? width}
      height={height ?? height}
      src={src}
      onClick={onClick}
      type="button"
    >{children}</ImgBtn>
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

export { BasicBtn, CancelBtn, KakaoBtn, ImageBtn, ShareLinkToWriter, ShareLinkToReceiver };
