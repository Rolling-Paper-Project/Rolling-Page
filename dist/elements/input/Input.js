var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from "react";
import styled from "styled-components";
var InputEl = styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: ", ";\n  background-color: ", ";\n  color: ", ";\n  border-radius: 5px;\n  padding: ", ";\n  border: none;\n  &:focus {\n    outline: none;\n  }\n"], ["\n  width: 100%;\n  height: ", ";\n  background-color: ", ";\n  color: ", ";\n  border-radius: 5px;\n  padding: ", ";\n  border: none;\n  &:focus {\n    outline: none;\n  }\n"])), function (props) { return props.height; }, function (props) { return props.bgColor; }, function (props) { return props.color; }, function (props) { return props.padding; });
var TextareaAtom = styled.textarea(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
var Input = function (_a) {
    var _b = _a.isInput, isInput = _b === void 0 ? true : _b, height = _a.height, color = _a.color, bgColor = _a.bgColor, placeholder = _a.placeholder, id = _a.id, type = _a.type, padding = _a.padding, value = _a.value;
    return (React.createElement(React.Fragment, null,
        isInput ? (React.createElement(InputEl, { height: height !== null && height !== void 0 ? height : height, color: color !== null && color !== void 0 ? color : color, bgColor: bgColor, isInput: isInput, placeholder: placeholder, id: id, type: type, padding: padding, value: value !== null && value !== void 0 ? value : value })) : (React.createElement(TextareaAtom, { height: height, color: color !== null && color !== void 0 ? color : color, bgColor: bgColor, isInput: isInput, placeholder: placeholder, id: id, type: type, padding: padding, value: value !== null && value !== void 0 ? value : value })),
        React.createElement("div", null)));
};
export default Input;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Input.js.map