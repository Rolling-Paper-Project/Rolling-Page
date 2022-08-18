import * as React from "react";
import { PropsWithChildren, useEffect, useState, useRef } from "react";
// import { Helmet } from "react-helmet";
import { DialogBox, LinkBox, Copied, Text, CloseBtn } from "./style";
import { KakaoBtn, ImageBtn } from "../../elements/button/Button";
import { ModalOver } from "../emojiModal/style";
import kakaoShare from "./kakao";
import copyImg from "../../assets/icon-copy.svg";
import closeImg from "../../assets/icon-close.svg";

interface ModalDefaultType {
  onClickToggleModal: () => void;
  selecteURL: string;
}

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

  const [copied, setCopied] = useState("");
  const outside = useRef() as React.MutableRefObject<HTMLDivElement>;
  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if(e.target === outside.current){
      onClickToggleModal();
    }
  };

  return (
    <ModalOver ref={outside} onClick={(e) => handleCloseModal(e)}>
      <DialogBox>
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
          <ImageBtn
            position="absolute"
            top="10px"
            right="10px"
            width="15px"
            height="15px"
            src={copyImg}
          ><span className="ir">복사 버튼</span></ImageBtn>
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
        <CloseBtn
          position="absolute"
          top="7px"
          right="7px"
          width="25px"
          height="25px"
          src={closeImg}
          onClick={() => {
            if (onClickToggleModal) {
              onClickToggleModal();
            }
          }}
        ><span className="ir">닫기 버튼</span></CloseBtn>
      </DialogBox>
    </ModalOver>
  );
};

export default Share;
