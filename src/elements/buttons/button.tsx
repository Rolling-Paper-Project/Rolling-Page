import * as React from "react";
import styled from "styled-components";
import kakaoLogo from "../../assets/icon-kakao.svg";
import copyImg from "../../assets/icon-copy.svg";
import closeImg from "../../assets/icon-close.svg";

interface BtnProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

interface ImgBtnProps {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  display?: string;
  onClick?: () => void;
}

const Btn = styled.button`
  border: none;
  cursor: pointer;
  width: 100px;
  height: 44px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  &:hover {
    opacity: 0.5;
  }
`;

const Basic = styled(Btn)`
  background: #977ae1;
  color: #ffffff;
`;

const Cancel = styled(Btn)`
  background: #ffffff;
  color: black;
  border: 1px solid #977ae1;
`;

const ShareSNS = styled.button`
  border: none;
  cursor: pointer;
  width: 212px;
  height: 49px;
  background-color: #ffe812;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  overflow: hidden;
  color: black;
  text-align: center;
  line-height: 24px;
  &:hover {
    opacity: 0.5;
  }
  &::before {
    display: inline;
    content: url(${kakaoLogo});
    position: relative;
    left: -5px;
    vertical-align: middle;
  }
`;

const Close = styled.button<ImgBtnProps>`
  background-image: url(${closeImg});
  position: relative;
  width: 25px;
  height: 25px;
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Copy = styled.button<ImgBtnProps>`
  background-image: url(${copyImg});
  position: relative;
  width: 15px;
  height: 15px;
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

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

export { BasicBtn, CancelBtn, KakaoBtn, CloseBtn, CopyBtn, Basic };
