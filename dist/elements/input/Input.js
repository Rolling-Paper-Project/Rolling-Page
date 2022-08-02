var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from "react";
import styled, { css } from "styled-components";
var inputCss = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: ", ";\n  background-color: ", ";\n  color: ", ";\n  border-radius: 5px;\n  padding: ", ";\n  border: ", ";\n  &:focus {\n    outline: none;\n  }\n"], ["\n  width: 100%;\n  height: ", ";\n  background-color: ", ";\n  color: ", ";\n  border-radius: 5px;\n  padding: ", ";\n  border: ", ";\n  &:focus {\n    outline: none;\n  }\n"])), function (props) { return props.height; }, function (props) { return props.bgColor; }, function (props) { return props.color; }, function (props) { return props.padding; }, function (props) { return props.border; });
var InputEl = styled.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  border: none;\n"], ["\n  ", "\n  border: none;\n"])), inputCss);
var TextareaAtom = styled.textarea(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n  resize: none;\n"], ["\n  ", "\n  resize: none;\n"])), inputCss);
var Input = function (_a) {
    var _b = _a.isInput, isInput = _b === void 0 ? true : _b, height = _a.height, color = _a.color, bgColor = _a.bgColor, placeholder = _a.placeholder, id = _a.id, type = _a.type, padding = _a.padding, value = _a.value, border = _a.border, _c = _a.required, required = _c === void 0 ? true : _c;
    return (React.createElement(React.Fragment, null,
        isInput ? (React.createElement(InputEl, { height: height !== null && height !== void 0 ? height : height, color: color !== null && color !== void 0 ? color : color, bgColor: bgColor, isInput: isInput, placeholder: placeholder, id: id, type: type, padding: padding, value: value !== null && value !== void 0 ? value : value, required: required !== null && required !== void 0 ? required : required })) : (React.createElement(TextareaAtom, { height: height, color: color !== null && color !== void 0 ? color : color, bgColor: bgColor, isInput: isInput, placeholder: placeholder, id: id, type: type, padding: padding, value: value !== null && value !== void 0 ? value : value, border: border !== null && border !== void 0 ? border : border, required: required !== null && required !== void 0 ? required : required })),
        React.createElement("div", null)));
};
export default Input;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Input.js.map