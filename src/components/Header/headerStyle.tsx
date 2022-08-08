import styled from "styled-components";

const HeaderWrap = styled.header`
  width: 100vw;
  background-color: #fff;
  border-bottom: 1px solid #efefef;
`;

const HeaderContent = styled.div`
  width: 1400px;
  padding: 17px 0 10px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 680px) {
    width: 100%;
    position: relative;
    padding: 17px 10px 10px;
  }
`;

// 배포 시 뺄 코드
const LogoImg = styled.img`
  cursor: pointer;
`;

const LinkButton = styled.button`
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

export { HeaderWrap, HeaderContent, LogoImg, LinkButton };
