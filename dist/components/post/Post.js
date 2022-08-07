var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from "react";
import styled from "styled-components";
import Emoji, { EmojiImg } from "../../elements/emoji/Emoji";
import CloseBtn from "../../assets/icon-close.svg";
import DeletModal from "../deleteModal/DeleteModal";
var PostArticle = styled.article(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 250px;\n  height: 250px;\n  clip-path: polygon(100% 0, 100% 100%, 15% 100%, 0 85%, 0 0);\n  padding: 27px 14px 19px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: ", ";\n"], ["\n  width: 250px;\n  height: 250px;\n  clip-path: polygon(100% 0, 100% 100%, 15% 100%, 0 85%, 0 0);\n  padding: 27px 14px 19px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: ", ";\n"])), function (props) { return props.bgColor; });
var PostContent = styled.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 14px;\n  word-break: break-all;\n"], ["\n  font-size: 14px;\n  word-break: break-all;\n"])));
var PostFooter = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: flex-start;\n  align-items: center;\n"], ["\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: flex-start;\n  align-items: center;\n"])));
var PostNickname = styled.strong(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 18px;\n  font-weight: bold;\n"], ["\n  font-size: 18px;\n  font-weight: bold;\n"])));
var PostEdge = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 0;\n  left: 0px;\n  width: 38px;\n  height: 38px;\n  clip-path: polygon(0 0, 95% 5%, 100% 100%);\n  background-color: ", ";\n"], ["\n  position: absolute;\n  bottom: 0;\n  left: 0px;\n  width: 38px;\n  height: 38px;\n  clip-path: polygon(0 0, 95% 5%, 100% 100%);\n  background-color: ", ";\n"])), function (props) { return props.shadowColor; });
var PostCloseBtn = styled(EmojiImg)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  top: 8px;\n  right: 8px;\n"], ["\n  position: absolute;\n  top: 8px;\n  right: 8px;\n"])));
var Post = function (_a) {
    var key = _a.key, bgColor = _a.bgColor, shadowColor = _a.shadowColor, content = _a.content, name = _a.name, profile = _a.profile;
    var _b = React.useState(false), isModalState = _b[0], setIsModalState = _b[1];
    var ShowDeleteModal = function () {
        setIsModalState(!isModalState);
    };
    var closeDeleteModal = function () {
        setIsModalState(false);
    };
    return (React.createElement("div", null,
        React.createElement(PostArticle, { bgColor: bgColor !== null && bgColor !== void 0 ? bgColor : bgColor },
            React.createElement("h3", { className: "ir" },
                name,
                "\uB2D8\uC758 \uD3EC\uC2A4\uD2B8\uC787"),
            React.createElement(PostContent, null, content),
            React.createElement(PostFooter, null,
                React.createElement(Emoji, { width: 40, height: 40, src: profile }),
                React.createElement(PostNickname, null, name)),
            React.createElement(PostEdge, { shadowColor: shadowColor !== null && shadowColor !== void 0 ? shadowColor : shadowColor }),
            React.createElement(PostCloseBtn, { className: "btn-base", alt: "\uD3EC\uC2A4\uD2B8 \uC0AD\uC81C", width: 15, height: 15, src: CloseBtn, onClick: ShowDeleteModal })),
        isModalState === true && React.createElement(DeletModal, { key: key, closeDeleteModal: closeDeleteModal })));
};
export default Post;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=Post.js.map