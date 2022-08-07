import styled from "styled-components";
import { Basic } from "../../hooks/buttons/button";

const Title = styled.h2`
  color: #b4b4b4;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 5px;
  @media (max-width: 420px) {
    display: none;
  }
`;

const TitleWrap = styled.section`
  max-width: 1400px;
  height: 100px;
  margin: 0 auto 20px;
  @media (max-width: 420px) {
    margin: 0;
    height: auto;
    width: 100%;
  }
`;

const DivFlex = styled.div`
  display: flex;
  gap: 25px;
  padding: 15px 10px;
  background-color: white;
  height: 60px;
`;

const TitleBtn = styled(Basic)`
  flex-shrink: 0;
`;

export { Title, TitleWrap, DivFlex, TitleBtn };
