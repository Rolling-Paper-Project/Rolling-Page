var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from "react";
import styled from "styled-components";
var InputAtom = styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: ", ";\n  background-color: ", ";\n  color: ", ";\n  border-radius: 5px;\n  padding: ", ";\n"], ["\n  width: 100%;\n  height: ", ";\n  background-color: ", ";\n  color: ", ";\n  border-radius: 5px;\n  padding: ", ";\n"])), function (props) { return props.height; }, function (props) { return props.bgColor; }, function (props) { return props.color; }, function (props) { return props.padding; });
var TextareaAtom = styled.textarea(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
var Input = function (_a) {
    var isInput = _a.isInput, height = _a.height, color = _a.color, bgColor = _a.bgColor, placeholder = _a.placeholder, id = _a.id, type = _a.type, padding = _a.padding;
    return (React.createElement(React.Fragment, null,
        isInput ? (React.createElement(InputAtom, { height: height, color: color, bgColor: bgColor, isInput: isInput, placeholder: placeholder, id: id, type: type, padding: padding })) : (React.createElement(TextareaAtom, { height: height, color: color, bgColor: bgColor, isInput: isInput, placeholder: placeholder, id: id, type: type, padding: padding })),
        React.createElement("div", null)));
};
export default Input;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Input.js.map