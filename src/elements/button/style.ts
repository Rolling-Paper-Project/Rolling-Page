import styled from "styled-components";
import { ImgBtnProps, ShareLinkProps } from "./Button";
import kakaoLogo from "../../assets/icon-kakao.svg";
import copyImg from "../../assets/icon-copy.svg";
import closeImg from "../../assets/icon-close.svg";

export const Btn = styled.button`
  border: none;
  cursor: pointer;
  width: 100px;
  height: 44px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  @media (max-width: 680px) {
    height: 30px;
  }
`;

export const Basic = styled(Btn)`
  background: #977ae1;
  color: #ffffff;
  &:hover {
    background-color: #5a4a82;
  }
`;

export const Cancel = styled(Btn)`
  background: #ffffff;
  color: black;
  border: 1px solid #977ae1;
  &:hover {
    background-color: #eae7f5;
  }
`;

export const ShareSNS = styled.button`
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
  &::before {
    display: inline;
    content: url(${kakaoLogo});
    position: relative;
    left: -5px;
    vertical-align: middle;
  }
  &:hover {
    filter: brightness(0.9);
  }
`;

export const Close = styled.button<ImgBtnProps>`
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

export const Copy = styled.button<ImgBtnProps>`
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

export const ShareLinkBtn = styled.button<ShareLinkProps>`
  font-size: 1.5rem;
  font-weight: 700;
  color: #5a4a82;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #5a4a82;
  &:hover {
    color: #5a4a82;
    /* border-bottom: 2px solid #5a4a82; */
    transform: translateY(-2px);
  }
  @media (max-width: 680px) {
    font-size: 0.8rem;
  }
`;