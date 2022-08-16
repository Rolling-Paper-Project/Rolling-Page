import styled from "styled-components";

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

export { DialogBox, LinkBox, Backdrop, Copied, Text };
