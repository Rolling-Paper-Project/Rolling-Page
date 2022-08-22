import process from "process";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Board from "../pages/board/Board";
import FixedBoard from "../pages/fixedBoard/FixedBoard";
import Main from "../pages/main/Main";
import GlobalStyles from "./style";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
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
