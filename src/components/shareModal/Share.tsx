import * as React from "react";
import { PropsWithChildren, useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
import { DialogBox, LinkBox, Backdrop, Copied, Text } from "./style";
import { KakaoBtn, CloseBtn, CopyBtn } from "../../elements/button/Button";
import kakaoShare from "./kakao";

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
