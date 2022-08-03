import * as React from "react";
import styled from "styled-components";
import kakaoLogo from "../assets/icon-kakao.svg";

interface Props {
  onClick: () => void;
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

const BasicBtn = ({ onClick }: Props) => {
  return <Basic onClick={onClick}>저장</Basic>;
};

const CancelBtn = ({ onClick }: Props) => {
  return <Cancel onClick={onClick}>취소</Cancel>;
};

const KakaoBtn = ({ onClick }: Props) => {
  return <ShareSNS onClick={onClick}>카카오톡으로 공유하기</ShareSNS>;
};

export { BasicBtn, CancelBtn, KakaoBtn };
