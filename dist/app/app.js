var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"; // style-reset 패키지
import Container from "../components/container/Container";
import { BasicBtn, CancelBtn, KakaoBtn } from "../elements/button";
var GlobalStyles = createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject([" \n    ", "\n    a{\n        text-decoration: none;\n        color: inherit;\n    }\n    *{\n        box-sizing: border-box;\n    }\n    &.hide {\n      display: none;\n    }  \n    &.ir {\n    position: absolute;\n    clip: rect(0,0,0,0);\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n    overflow:hidden;\n  }\n"], [" \n    ", "\n    a{\n        text-decoration: none;\n        color: inherit;\n    }\n    *{\n        box-sizing: border-box;\n    }\n    &.hide {\n      display: none;\n    }  \n    &.ir {\n    position: absolute;\n    clip: rect(0,0,0,0);\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n    overflow:hidden;\n  }\n"])), reset);
// FC : function component 라는 의미입니다.
var App = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(GlobalStyles, null),
        React.createElement("h1", null, "Hello TypeScript starter!!!"),
        React.createElement(Container, null),
        React.createElement(BasicBtn, { onClick: function () {
                ("");
            } }),
        React.createElement(CancelBtn, { onClick: function () {
                ("");
            } }),
        React.createElement(KakaoBtn, { onClick: function () {
                ("");
            } })));
};
export default App;
var templateObject_1;
//# sourceMappingURL=app.js.map