var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from "react";
import { useState, useCallback } from "react";
import styled from "styled-components";
import Share from "../../components/shareModal/Share";
var ShareLinkBtn = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 44px;\n  color: #d4caed;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  border-bottom: 2px solid #d4caed;\n  &:hover {\n    color: #5a4a82;\n    border-bottom: 2px solid #5a4a82;\n    transform: translateY(-2px);\n  }\n"], ["\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 44px;\n  color: #d4caed;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  border-bottom: 2px solid #d4caed;\n  &:hover {\n    color: #5a4a82;\n    border-bottom: 2px solid #5a4a82;\n    transform: translateY(-2px);\n  }\n"])));
var ShareLinkToWriter = function () {
    var _a = useState(false), isOpenModal = _a[0], setOpenModal = _a[1];
    var onClickToggleModal = useCallback(function () {
        setOpenModal(!isOpenModal);
    }, [isOpenModal]);
    return (React.createElement(React.Fragment, null,
        React.createElement(ShareLinkBtn, { onClick: onClickToggleModal }, "\uC791\uC131 \uB9C1\uD06C \uACF5\uC720\uD558\uAE30"),
        isOpenModal ? (React.createElement(Share, { onClickToggleModal: onClickToggleModal })) : (React.createElement("span", null))));
};
var ShareLinkToReceiver = function () {
    var _a = useState(false), isOpenModal = _a[0], setOpenModal = _a[1];
    var onClickToggleModal = useCallback(function () {
        setOpenModal(!isOpenModal);
    }, [isOpenModal]);
    return (React.createElement(React.Fragment, null,
        React.createElement(ShareLinkBtn, { onClick: onClickToggleModal }, "\uC644\uC131\uB41C \uB864\uB9C1\uD398\uC774\uC9C0 \uACF5\uC720\uD558\uAE30"),
        isOpenModal ? (React.createElement(Share, { onClickToggleModal: onClickToggleModal })) : (React.createElement("span", null))));
};
export { ShareLinkToWriter, ShareLinkToReceiver };
var templateObject_1;
//# sourceMappingURL=shareBtn.js.map