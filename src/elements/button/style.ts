import styled from "styled-components";
import { ImgBtnProps } from "./Button";
import kakaoLogo from "../../assets/icon-kakao.svg";

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
    @media (max-width: 680px) {
      background-color: #977ae1;
    }
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
  padding: 5px 20px 5px 15px;
  background-color: #ffe812;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  &::before {
    content: "";
    width: 40px;
    height: 40px;
    background: url(${kakaoLogo}) no-repeat center;
    background-size: cover;
  }
  &:hover {
    filter: brightness(0.9);
  }
`;

export const ImgBtn = styled.button<ImgBtnProps>`
  position: ${props => props.position};
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  width: ${props => props.width};
  height: ${props => props.height};
  background: url(${props => props.src}) no-repeat center;
  background-size: cover;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const ShareLinkBtn = styled.button`
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
