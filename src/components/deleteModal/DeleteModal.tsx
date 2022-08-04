import * as React from "react";
import { Basic, CancelBtn } from "../../elements/button";
import './deleteModalStyle'
import { BtnWrap, ModalBg, ModalExp, ModalTitle, ModalWrap } from "./deleteModalStyle";

const DeletModal = () => {
  return (
    <>
    <ModalWrap>
      <ModalTitle>정말로 삭제하시겠습니까?</ModalTitle>
      <ModalExp>삭제하면 되돌릴 수 없어요! :(</ModalExp>
      <BtnWrap>
        <CancelBtn
          onClick={() => {
            ("");
          }}
        />
        <Basic
          onClick={() => {
              ("");
            }}
          >삭제
        </Basic>
      </BtnWrap>
    </ModalWrap>
    <ModalBg/>
    </>
  )
};

export default DeletModal;