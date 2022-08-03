var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from "react";
import styled from "styled-components";
import Input from "../../elements/input/Input";
var Title = styled.h2(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: #b4b4b4;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 18px;\n  margin-bottom: 5px;\n"], ["\n  color: #b4b4b4;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 18px;\n  margin-bottom: 5px;\n"])));
var TitleInput = function () {
    return (React.createElement("form", null,
        React.createElement("label", { htmlFor: "title" },
            React.createElement(Title, null, "Title")),
        React.createElement(Input, { isInput: true, height: "auto", bgColor: "#EFEFEF", placeholder: "\uBC1B\uB294 \uC0AC\uB78C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694", id: "title", padding: "13px", fontSize: "14px", fontWeight: "400", required: true })));
};
export default TitleInput;
var templateObject_1;
//# sourceMappingURL=TitleInput.js.map