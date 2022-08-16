import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrap = styled.header`
  width: 100vw;
  background-color: #fff;
  border-bottom: 1px solid #efefef;
  padding: 0 50px;
  @media (max-width: 680px) {
    padding: 0;
  }
`;

const HeaderContent = styled.h1`
  max-width: 1400px;
  padding: 17px 0 10px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 680px) {
    width: 100%;
    position: relative;
    padding: 10px 10px 10px;
  }
`;

// 배포 시 뺄 코드
const LogoImg = styled.img`
  cursor: pointer;
  @media (max-width: 680px) {
    width: 150px;
  }
`;

const LinkButton = styled(Link)`
  font-weight: 500;
  font-size: 20px;
  color: #977ae1;
  outline: none;
  border: none;
  background-color: inherit;
  display: inline-flex;
  flex-direction: row;
  align-items: end;
  gap: 7px;
  cursor: pointer;
  @media (max-width: 680px) {
    font-size: 12px;
  }
`;

const GitImg = styled.img`
  @media (max-width: 680px) {
    width: 20px;
    height: 20px;
  }
`;

export { HeaderWrap, HeaderContent, LogoImg, LinkButton, GitImg };
