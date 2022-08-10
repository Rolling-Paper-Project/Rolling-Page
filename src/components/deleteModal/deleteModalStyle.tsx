import styled from "styled-components";

const ModalBg = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 10;
`;

const ModalWrap = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 436px;
  background: #fff;
  border-radius: 10px;
  text-align: center;
  padding: 40px 0;
  margin: auto;
  z-index: 20;
  @media (max-width: 680px) {
    width: 80%;
  }
`;

const ModalTitle = styled.h3`
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
  margin-bottom: 3px;
`;

const ModalExp = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #afafaf;
  margin-bottom: 25px;
`;

const BtnWrap = styled.div`
  display: flex;
  gap: 60px;
  justify-content: center;
  @media (max-width: 680px) {
    gap: 30px;
  }
`;

export { ModalBg, ModalWrap, ModalTitle, ModalExp, BtnWrap };
