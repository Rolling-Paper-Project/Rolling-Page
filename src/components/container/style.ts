import styled from "styled-components";
import { Basic } from "../../elements/button/style";

export const ContainerStyled = styled.div`
  height: 80vh;
  position: relative;
  max-width: 1400px;
  max-height: 750px;
  margin: 0 auto;
  border: 1px solid #efefef;
  background-color: white;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);
  padding: 40px 30px;
  @media screen and (max-width: 680px) {
    width: 100%;
    border: none;
    box-shadow: none;
    padding: 20px 10px;
  }
  @media screen and (max-width: 460px) {
    flex-direction: column;
  }
`;

export const BoardHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 37px 24px 30px;
  @media (max-width: 460px) {
    flex-direction: column;
    gap: 10px;
    padding: 15px 0;
  }
`;

export const BoardTitleStyled = styled.h2`
  width: fit-content;
  font-weight: 600;
  font-size: 40px;
  color: #977ae1;
  word-break: keep-all;
  @media (max-width: 680px) {
    font-size: 20px;
  }
  @media (max-width: 460px) {
    margin-bottom: 10px;
    font-size: 23px;
    text-align: center;
  }
`;

export const BoardPrevButtonStyled = styled(Basic)`
  width: 150px;
  @media (max-width: 680px) {
    font-size: 16px;
  }
`;

export const BoardButtonStyled = styled.button`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: white;
  background-color: #977ae1;
  font-size: 45px;
  border: none;
  bottom: 30px;
  right: 45px;
  cursor: pointer;
  @media (max-width: 680px) {
    width: 50px;
    height: 50px;
    font-size: 40px;
    bottom: 15px;
    right: 50px;
  }
`;

export const BoardPostUl = styled.ul`
  height: 80%;
  margin-bottom: 148px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    background: #977ae1;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
  @media (max-width: 680px) {
    justify-content: center;
    margin-bottom: 50px;
  }
  @media (max-width: 460px) {
    margin-bottom: 30px;
  }
`;
