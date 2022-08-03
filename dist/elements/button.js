var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from "react";
import styled from "styled-components";
var Btn = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: none;\n  cursor: pointer;\n  width: 100px;\n  height: 44px;\n  border-radius: 5px;\n  font-size: 18px;\n  font-weight: 700;\n  &:hover {\n    opacity: 0.5;\n  }\n"], ["\n  border: none;\n  cursor: pointer;\n  width: 100px;\n  height: 44px;\n  border-radius: 5px;\n  font-size: 18px;\n  font-weight: 700;\n  &:hover {\n    opacity: 0.5;\n  }\n"])));
var Basic = styled(Btn)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: #977ae1;\n  color: #ffffff;\n"], ["\n  background: #977ae1;\n  color: #ffffff;\n"])));
var Cancel = styled(Btn)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background: #ffffff;\n  color: black;\n  border: 1px solid #977ae1;\n"], ["\n  background: #ffffff;\n  color: black;\n  border: 1px solid #977ae1;\n"])));
var ShareSNS = styled.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  border: none;\n  cursor: pointer;\n  width: 212px;\n  height: 49px;\n  background-color: #ffe812;\n  border-radius: 10px;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 24px;\n  color: black;\n  &:hover {\n    opacity: 0.5;\n  }\n  &::before {\n    content: url(../assets/icon-kakao.png);\n    background: url(../assets/icon-kakao.png);\n    position: relative;\n  }\n"], ["\n  border: none;\n  cursor: pointer;\n  width: 212px;\n  height: 49px;\n  background-color: #ffe812;\n  border-radius: 10px;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 24px;\n  color: black;\n  &:hover {\n    opacity: 0.5;\n  }\n  &::before {\n    content: url(../assets/icon-kakao.png);\n    background: url(../assets/icon-kakao.png);\n    position: relative;\n  }\n"])));
var BasicBtn = function (_a) {
    var onClick = _a.onClick;
    return React.createElement(Basic, { onClick: onClick }, "\uC800\uC7A5");
};
var CancelBtn = function (_a) {
    var onClick = _a.onClick;
    return React.createElement(Cancel, { onClick: onClick }, "\uCDE8\uC18C");
};
var KakaoBtn = function (_a) {
    var onClick = _a.onClick;
    return React.createElement(ShareSNS, { onClick: onClick }, "\uCE74\uCE74\uC624\uD1A1\uC73C\uB85C \uACF5\uC720\uD558\uAE30");
};
export { BasicBtn, CancelBtn, KakaoBtn };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=button.js.map