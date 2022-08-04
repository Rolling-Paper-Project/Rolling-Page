import styled from "styled-components";
import { Basic } from "../../elements/buttons/button";

const Title = styled.h2`
  color: #b4b4b4;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 5px;
`;

const TitleWrap = styled.section`
  width: 1400px;
  margin: 0 auto 20px;
`;

const DivFlex = styled.div`
  display: flex;
  gap: 25px;
`;

const TitleBtn = styled(Basic)`
  flex-shrink: 0;
`;

export { Title, TitleWrap, DivFlex, TitleBtn };