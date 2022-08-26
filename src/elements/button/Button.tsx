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
  text: string;
  selecteURL: string;
}

interface BasicProps {
  onClick: (event: {
    stopPropagation: () => void;
    currentTarget: any;
    target: any;
  }) => void;
  children: React.ReactNode;
}

const BasicBtn = ({ onClick, children }: BasicProps) => {
  return <Basic onClick={onClick}>{children}</Basic>;
};

const CancelBtn = ({ onClick, children }: BtnProps) => {
  return (
    <Cancel onClick={onClick} type="button">
      {children}
    </Cancel>
  );
};

const KakaoBtn = ({ onClick, children }: BtnProps) => {
  return (
    <ShareSNS onClick={onClick} type="button">
      {children}
    </ShareSNS>
  );
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
  children,
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
    >
      {children}
    </ImgBtn>
  );
};

const ShareLinkButton = ({ text, selecteURL }: ShareLinkProps) => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <>
      <ShareLinkBtn onClick={onClickToggleModal} type="button">
        {text}
      </ShareLinkBtn>
      {isOpenModal && (
        <Share onClickToggleModal={onClickToggleModal} selecteURL={selecteURL}>
          {selecteURL}
        </Share>
      )}
    </>
  );
};

export { BasicBtn, CancelBtn, KakaoBtn, ImageBtn, ShareLinkButton };
