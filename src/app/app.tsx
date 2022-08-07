import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"; // style-reset 패키지
import Board from "../pages/board/Board";
import FixedBoard from "../pages/fixedBoard/FixedBoard";
import Main from "../pages/main/Main";

const GlobalStyles = createGlobalStyle` 
    ${reset}
    
    body{
      font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
      @font-face {
        font-family: "Pretendard";
        src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
          format("woff");
        font-weight: 400;
        font-style: normal;
      }
      overflow-x:hidden;
    }
    *{
      box-sizing: border-box;
    }
    
    a{
        text-decoration: none;
        color: inherit;
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
    &.btn-base {
      border: none;
      cursor: pointer;
    }
    &.hidden {
      display: none;
    }
`;

// FC : function component 라는 의미입니다.
const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/board/:id" element={<Board />} />
          <Route path="/done/:id" element={<FixedBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
