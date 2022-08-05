import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"; // style-reset 패키지
import { Board } from "../pages/board/Board";
import FixedBoard from "../pages/fixedBoard/FixedBoard";
import Main from "../pages/main/Main";

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
