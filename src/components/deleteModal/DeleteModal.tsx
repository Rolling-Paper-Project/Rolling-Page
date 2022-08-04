import * as React from "react";
import { BasicBtn, CancelBtn } from "../../elements/buttons/button";
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
        <BasicBtn
          onClick={() => {
              ("");
            }}
          >삭제
        </BasicBtn>
      </BtnWrap>
    </ModalWrap>
    <ModalBg/>
    </>
  )
};

export default DeletModal;