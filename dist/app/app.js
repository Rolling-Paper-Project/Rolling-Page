var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"; // style-reset 패키지
import { Board } from "../pages/board/Board";
import FixedBoard from "../pages/fixedBoard/FixedBoard";
import Main from "../pages/main/Main";
var GlobalStyles = createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject([" \n    ", "\n    a{\n        text-decoration: none;\n        color: inherit;\n    }\n    *{\n      box-sizing: border-box;\n      font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;\n    }\n    &.hide {\n      display: none;\n    }  \n    &.ir {\n    position: absolute;\n    clip: rect(0,0,0,0);\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n    overflow:hidden;\n    }\n    &.btn-base {\n      border: none;\n      cursor: pointer;\n    }\n    \n"], [" \n    ", "\n    a{\n        text-decoration: none;\n        color: inherit;\n    }\n    *{\n      box-sizing: border-box;\n      font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;\n    }\n    &.hide {\n      display: none;\n    }  \n    &.ir {\n    position: absolute;\n    clip: rect(0,0,0,0);\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n    overflow:hidden;\n    }\n    &.btn-base {\n      border: none;\n      cursor: pointer;\n    }\n    \n"])), reset);
console.log();
// FC : function component 라는 의미입니다.
var App = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(GlobalStyles, null),
        React.createElement(BrowserRouter, null,
            React.createElement(Routes, null,
                React.createElement(Route, { path: "/", element: React.createElement(Main, null) }),
                React.createElement(Route, { path: "/board/:id", element: React.createElement(Board, null) }),
                React.createElement(Route, { path: "/done/:id", element: React.createElement(FixedBoard, null) })))));
};
export default App;
var templateObject_1;
//# sourceMappingURL=app.js.map