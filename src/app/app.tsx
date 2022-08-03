import * as React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"; // style-reset 패키지
import Container from "../components/container/Container";
import { BasicBtn, CancelBtn, KakaoBtn } from "../elements/button";

const GlobalStyles = createGlobalStyle` 
    ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    &.hide {
      display: none;
    }  
    &.ir {
    position: absolute;
    clip: rect(0,0,0,0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow:hidden;
  }
`;

// FC : function component 라는 의미입니다.
const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <h1>Hello TypeScript starter!!!</h1>
      <Container />
      <BasicBtn
        onClick={() => {
          ("");
        }}
      />
      <CancelBtn
        onClick={() => {
          ("");
        }}
      />

      <KakaoBtn
        onClick={() => {
          ("");
        }}
      />
    </>
  );
};

export default App;
