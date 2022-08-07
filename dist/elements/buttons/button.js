var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from "react";
import styled from "styled-components";
import kakaoLogo from "../../assets/icon-kakao.svg";
import copyImg from "../../assets/icon-copy.svg";
import closeImg from "../../assets/icon-close.svg";
var Btn = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: none;\n  cursor: pointer;\n  width: 100px;\n  height: 44px;\n  border-radius: 5px;\n  font-size: 18px;\n  font-weight: 700;\n"], ["\n  border: none;\n  cursor: pointer;\n  width: 100px;\n  height: 44px;\n  border-radius: 5px;\n  font-size: 18px;\n  font-weight: 700;\n"])));
var Basic = styled(Btn)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: #977ae1;\n  color: #ffffff;\n  &:hover {\n    background-color: #5a4a82;\n  }\n"], ["\n  background: #977ae1;\n  color: #ffffff;\n  &:hover {\n    background-color: #5a4a82;\n  }\n"])));
var Cancel = styled(Btn)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background: #ffffff;\n  color: black;\n  border: 1px solid #977ae1;\n  &:hover {\n    background-color: #eae7f5;\n  }\n"], ["\n  background: #ffffff;\n  color: black;\n  border: 1px solid #977ae1;\n  &:hover {\n    background-color: #eae7f5;\n  }\n"])));
var ShareSNS = styled.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  border: none;\n  cursor: pointer;\n  width: 212px;\n  height: 49px;\n  background-color: #ffe812;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  overflow: hidden;\n  color: black;\n  text-align: center;\n  line-height: 24px;\n  &::before {\n    display: inline;\n    content: url(", ");\n    position: relative;\n    left: -5px;\n    vertical-align: middle;\n  }\n  &:hover {\n    filter: brightness(0.9);\n  }\n"], ["\n  border: none;\n  cursor: pointer;\n  width: 212px;\n  height: 49px;\n  background-color: #ffe812;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  overflow: hidden;\n  color: black;\n  text-align: center;\n  line-height: 24px;\n  &::before {\n    display: inline;\n    content: url(", ");\n    position: relative;\n    left: -5px;\n    vertical-align: middle;\n  }\n  &:hover {\n    filter: brightness(0.9);\n  }\n"])), kakaoLogo);
var Close = styled.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background-image: url(", ");\n  position: relative;\n  width: 25px;\n  height: 25px;\n  top: ", ";\n  bottom: ", ";\n  left: ", ";\n  right: ", ";\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n"], ["\n  background-image: url(", ");\n  position: relative;\n  width: 25px;\n  height: 25px;\n  top: ", ";\n  bottom: ", ";\n  left: ", ";\n  right: ", ";\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n"])), closeImg, function (props) { return props.top; }, function (props) { return props.bottom; }, function (props) { return props.left; }, function (props) { return props.right; });
var Copy = styled.button(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  background-image: url(", ");\n  position: relative;\n  width: 15px;\n  height: 15px;\n  top: ", ";\n  bottom: ", ";\n  left: ", ";\n  right: ", ";\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n"], ["\n  background-image: url(", ");\n  position: relative;\n  width: 15px;\n  height: 15px;\n  top: ", ";\n  bottom: ", ";\n  left: ", ";\n  right: ", ";\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n"])), copyImg, function (props) { return props.top; }, function (props) { return props.bottom; }, function (props) { return props.left; }, function (props) { return props.right; });
var BasicBtn = function (_a) {
    var onClick = _a.onClick, children = _a.children;
    return React.createElement(Basic, { onClick: onClick }, children);
};
var CancelBtn = function (_a) {
    var onClick = _a.onClick, children = _a.children;
    return React.createElement(Cancel, { onClick: onClick }, children);
};
var KakaoBtn = function (_a) {
    var onClick = _a.onClick, children = _a.children;
    return React.createElement(ShareSNS, { onClick: onClick }, "\uCE74\uCE74\uC624\uD1A1\uC73C\uB85C \uACF5\uC720\uD558\uAE30");
};
var CloseBtn = function (_a) {
    var top = _a.top, bottom = _a.bottom, left = _a.left, right = _a.right, display = _a.display, onClick = _a.onClick;
    return (React.createElement(Close, { top: top !== null && top !== void 0 ? top : top, bottom: bottom !== null && bottom !== void 0 ? bottom : bottom, left: left !== null && left !== void 0 ? left : left, right: right !== null && right !== void 0 ? right : right, onClick: onClick, display: display !== null && display !== void 0 ? display : display }));
};
var CopyBtn = function (_a) {
    var top = _a.top, bottom = _a.bottom, left = _a.left, right = _a.right, display = _a.display, onClick = _a.onClick;
    return (React.createElement(Copy, { top: top !== null && top !== void 0 ? top : top, bottom: bottom !== null && bottom !== void 0 ? bottom : bottom, left: left !== null && left !== void 0 ? left : left, right: right !== null && right !== void 0 ? right : right, onClick: onClick, display: display !== null && display !== void 0 ? display : display }));
};
export { BasicBtn, CancelBtn, KakaoBtn, CloseBtn, CopyBtn, Basic };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=button.js.map