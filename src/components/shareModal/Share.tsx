import * as React from "react";
import { PropsWithChildren, useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
import styled from "styled-components";
import { KakaoBtn, CloseBtn, CopyBtn } from "../../elements/button/Button";
import kakaoShare from "./kakao";

interface ModalDefaultType {
  onClickToggleModal: () => void;
  selecteURL: string;
}

const DialogBox = styled.dialog`
  position: fixed;
  top: 300px;
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 20;
  padding: 20px;
  @media (max-width: 680px) {
    top: 250px;
    width: 260px;
    height: 130px;
  }
`;

const LinkBox = styled.div`
  width: 590px;
  margin: 10px 0 30px;
  padding: 14px 19px 55px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: #efefef;
  z-index: 30;
  overflow: hidden;
  cursor: pointer;
  @media (max-width: 680px) {
    display: none;
  }
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Copied = styled.span`
  position: absolute;
  top: 160px;
`;

const Text = styled.p`
  position: relative;
  top: -18px;
  font-size: 16px;
`;

const Share = ({
  onClickToggleModal,
  children,
  selecteURL,
}: PropsWithChildren<ModalDefaultType>) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  // console.log(children);

  const [copied, setCopied] = useState("");

  return (
    <>
      <DialogBox>
        <CloseBtn
          bottom="10px"
          left="330px"
          onClick={() => {
            if (onClickToggleModal) {
              onClickToggleModal();
            }
          }}
        />
        <Text>당신의 SNS에 공유해주세요 :)</Text>
        <LinkBox
          onClick={() => {
            const content: any = children;
            navigator.clipboard
              .writeText(content)
              .then(() => {
                setCopied("복사되었습니다!");
              })
              .catch(err => {
                setCopied("복사에 실패했습니다!");
              });
          }}
        >
          <CopyBtn bottom="15px" left="550px" />
          {children}
        </LinkBox>
        <Copied>{copied}</Copied>
        {/* <Helmet>
          <script src="https://developers.kakao.com/sdk/js/kakao.js" />
        </Helmet> */}
        <KakaoBtn
          onClick={() => {
            kakaoShare(selecteURL);
          }}
        />
      </DialogBox>
      <Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();

          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </>
  );
};

export default Share;
