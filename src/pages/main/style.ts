import { Link } from "react-router-dom";
import styled from "styled-components";
import { ContainerStyled } from "../../components/container/style";

export const MainContainer = styled(ContainerStyled)`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  @media (max-width: 680px) {
    width: 100%;
    position: relative;
    margin-top: 0;
    padding: 10px;
  }
`;

export const BoardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: none;
  cursor: pointer;
  width: 30%;
  height: 44px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  line-height: 2.3;
  margin: 10px auto;
  background: #977ae1;
  color: #ffffff;
  &:hover {
    background-color: #5a4a82;
  }
  @media (max-width: 680px) {
    width: 70%;
    font-size: 18px;
    line-height: auto;
  }
  @media (max-width: 460px) {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const MainExp = styled.strong`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: center;
  display: block;
  @media (max-width: 680px) {
    word-break: keep-all;
    line-height: 28px;
    padding: 10px;
    font-size: 22px;
  }
`;
