import styled from 'styled-components';

const HeaderWrap = styled.header`
  width: 100vw;
  background-color: #fff;
  border-bottom: 1px solid #EFEFEF;
`;

const HeaderContent = styled.div`
  max-width: 1400px;
  padding: 17px 0 10px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const LogoImg = styled.img` 
  cursor: pointer;
`;


const LinkButton = styled.button`
  font-weight: 500;
  font-size: 20px;
  color: #977AE1;
  outline: none;
  border: none;
  background-color: inherit;
  display: inline-flex;
  flex-direction: row;
  align-items: end; 
  gap: 7px;
  cursor: pointer;
`;

export { HeaderWrap, HeaderContent, LogoImg, LinkButton};