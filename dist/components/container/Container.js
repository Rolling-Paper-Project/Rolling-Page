var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from "react";
import styled from "styled-components";
// interface ContainerProps {
//   className: string;
// }
var ContainerStyled = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  position: relative;\n  width: 1400px;\n  height: 750px;\n  margin: 0 auto;\n  border: 1px solid #efefef;\n  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);\n"], ["\n  box-sizing: border-box;\n  position: relative;\n  width: 1400px;\n  height: 750px;\n  margin: 0 auto;\n  border: 1px solid #efefef;\n  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);\n"])));
var BoardTitleStyled = styled.h2(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: fit-content;\n  font-weight: 300;\n  font-size: 35px;\n  line-height: 44px;\n  color: #977ae1;\n  padding: 16px 0 24px 31px;\n"], ["\n  width: fit-content;\n  font-weight: 300;\n  font-size: 35px;\n  line-height: 44px;\n  color: #977ae1;\n  padding: 16px 0 24px 31px;\n"])));
var BoardTextStyled = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: fit-content;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-weight: 400;\n  font-size: 22px;\n"], ["\n  width: fit-content;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-weight: 400;\n  font-size: 22px;\n"])));
var BoardButtonStyled = styled.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  color: white;\n  background-color: #977ae1;\n  font-size: 45px;\n  border: none;\n  bottom: 29px;\n  right: 48px;\n"], ["\n  position: absolute;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  color: white;\n  background-color: #977ae1;\n  font-size: 45px;\n  border: none;\n  bottom: 29px;\n  right: 48px;\n"])));
var TestBtn = styled.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 50px;\n  cursor: pointer;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n"], ["\n  width: 50px;\n  cursor: pointer;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n"])));
var BoardPostUl = styled.ul(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  height: 520px;\n  margin-bottom: 148px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  padding: 0 31px;\n  overflow: scroll;\n"], ["\n  height: 520px;\n  margin-bottom: 148px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  padding: 0 31px;\n  overflow: scroll;\n"])));
var BoardPostLi = styled.li(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: 250px;\n  height: 250px;\n  background-color: tomato;\n"], ["\n  width: 250px;\n  height: 250px;\n  background-color: tomato;\n"])));
var Container = function () {
    var _a = React.useState(false), toggle = _a[0], setToggle = _a[1];
    var clickedToggle = function () {
        setToggle(function (prev) { return !prev; });
    };
    return (React.createElement(ContainerStyled, null,
        React.createElement(TestBtn, { onClick: clickedToggle }, "test Button"),
        React.createElement(BoardTitleStyled, null, "\uB0B4\uAC00 \uC124\uC815\uD55C \uBCF4\uB4DC \uC774\uB984"),
        toggle ? (React.createElement(BoardTextStyled, null, "\uC0C8\uB85C\uC6B4 \uB864\uB9C1\uD398\uC774\uD37C\uB97C \uB9CC\uB4E4\uC5B4\uBCF4\uC138\uC694!")) : (React.createElement(BoardPostUl, null,
            React.createElement(BoardPostLi, null),
            React.createElement(BoardPostLi, null),
            React.createElement(BoardPostLi, null),
            React.createElement(BoardPostLi, null),
            React.createElement(BoardPostLi, null),
            React.createElement(BoardPostLi, null),
            React.createElement(BoardPostLi, null),
            React.createElement(BoardPostLi, null),
            React.createElement(BoardPostLi, null),
            React.createElement(BoardPostLi, null),
            React.createElement(BoardPostLi, null),
            React.createElement(BoardPostLi, null),
            React.createElement(BoardPostLi, null),
            React.createElement(BoardPostLi, null),
            React.createElement(BoardPostLi, null),
            React.createElement(BoardPostLi, null))),
        React.createElement(BoardButtonStyled, null, "+")));
};
export default Container;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
// BoardMain element
// title element (input value 가져오기)
// BoardButton element (클릭시 생성모달 출력)
// height: ${props => props.height};
//   background-color: ${props => props.bgColor};
//   color: ${props => props.color};
//   border-radius: 5px;
//   padding: ${props => props.padding};
//# sourceMappingURL=Container.js.map