import styled from 'styled-components';

export const HeaderWrap = styled.header`
  width: 100vw;
  background-color: #fff;
  border-bottom: 1px solid #EFEFEF;
`;

export const HeaderContent = styled.div`
  width: 1400px;
  padding-top: 27px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const LogoImg = styled.img` 
  cursor: pointer;
`;

export const LinkButton = styled.button`
  font-weight: 500;
  font-size: 20px;
  color: #977AE1;
  outline: none;
  border: none;
  background-color: inherit;
  display: inline-flex;
  flex-direction: row;
  align-items: center; 
  gap: 7px;
  cursor: pointer;
`;