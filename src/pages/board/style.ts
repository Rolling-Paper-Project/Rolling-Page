import styled from "styled-components";

export const BoardWrap = styled.div`
  padding-top: 15px;
  margin: 0 50px;
  @media (max-width: 680px) {
    height: 100%;
    background-color: #fffafc;
    padding-top: 10px;
    margin: 0;
  }
`;

export const ShareLinkBox = styled.div`
  max-width: 1400px;
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
  margin: 10px auto 0;
  padding: 10px;
  @media (max-width: 680px) {
    justify-content: center;
  }
`;
