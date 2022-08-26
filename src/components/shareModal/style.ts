import styled from "styled-components";
import { ImgBtn, ShareSNS } from "../../elements/button/style";

const DialogBox = styled.dialog`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  padding: 20px;
  margin: 0;
  @media (max-width: 680px) {
    width: 260px;
    padding: 20px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  @media (max-width: 680px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const LinkBox = styled.div`
  position: relative;
  width: 590px;
  padding: 20px;
  border-radius: 10px;
  background-color: #efefef;
  cursor: pointer;
  @media (max-width: 680px) {
    font-size: 13px;
    width: 100%;
    padding: 15px;
    word-wrap: break-word;
  }
`;

const Copied = styled.span`
  font-size: 16px;
  padding: 10px;
  @media (max-width: 680px) {
    font-size: 10px;
    padding: 5px;
  }
  `;

const CopyBtn = styled(ImgBtn)`
  @media (max-width: 680px) {
    top: 6px;
    right: 6px;
    width: 12px;
    height: 12px;
  }
`;

const ShareBtn = styled(ShareSNS)`
  @media (max-width: 680px) {
    font-size: 13px;
    width: 100%;
    justify-content: center;
    gap: 5px;
    &::before {
      width: 26px;
      height: 26px;
    }
  }
`;

const CloseBtn = styled(ImgBtn)`
  @media (max-width: 680px) {
    width: 15px;
    height: 15px;
  }
`;

export { DialogBox, LinkBox, Copied, Text, CloseBtn, CopyBtn, ShareBtn };
