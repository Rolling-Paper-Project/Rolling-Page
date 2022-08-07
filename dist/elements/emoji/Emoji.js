var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from "styled-components";
export var EmojiImg = styled.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n"], ["\n  width: ", "px;\n  height: ", "px;\n"])), function (props) { return props.width; }, function (props) { return props.height; });
var Emoji = function (_a) {
    var width = _a.width, height = _a.height, src = _a.src;
    return (React.createElement(EmojiImg, { width: width, height: height, src: src }));
};
export default Emoji;
var templateObject_1;
//# sourceMappingURL=Emoji.js.map