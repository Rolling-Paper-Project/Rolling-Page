import * as React from "react";
import { PropsWithChildren } from "react";
import styled from "styled-components";
import { KakaoBtn, CloseBtn, CopyBtn } from "../../elements/buttons/button";

interface ModalDefaultType {
  onClickToggleModal: () => void;
}

const ModalContainer = styled.div`
  width: 100%;
  top: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
`;

const DialogBox = styled.dialog`
  width: 700px;
  height: 263px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 20;
`;

const LinkBox = styled.div`
  width: 590px;
  height: 100px;
  margin: 24px 0 34px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: #efefef;
  z-index: 30;
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Share = ({ onClickToggleModal }: PropsWithChildren<ModalDefaultType>) => {
  return (
    <ModalContainer>
      <DialogBox>
        {/* <CloseBtn bottom="10px" left="330px" /> */}
        <LinkBox>
          <CopyBtn bottom="35px" left="570px" />
        </LinkBox>
        <KakaoBtn />
      </DialogBox>
      <Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();

          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </ModalContainer>
  );
};

export default Share;
