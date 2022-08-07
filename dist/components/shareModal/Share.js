var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from "react";
import { useEffect } from "react";
// import { Helmet } from "react-helmet";
import styled from "styled-components";
import { KakaoBtn, CloseBtn, CopyBtn } from "../../elements/buttons/button";
import kakaoShare from "./kakao";
var ModalContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  top: 50vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n"], ["\n  width: 100%;\n  top: 50vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n"])));
var DialogBox = styled.dialog(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 700px;\n  height: 263px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: none;\n  border-radius: 10px;\n  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);\n  box-sizing: border-box;\n  background-color: white;\n  z-index: 20;\n"], ["\n  width: 700px;\n  height: 263px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: none;\n  border-radius: 10px;\n  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);\n  box-sizing: border-box;\n  background-color: white;\n  z-index: 20;\n"])));
var LinkBox = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 590px;\n  height: 100px;\n  margin: 10px 0 34px;\n  padding: 14px 19px 55px;\n  display: flex;\n  align-items: center;\n  border-radius: 10px;\n  background-color: #efefef;\n  z-index: 30;\n  overflow: hidden;\n"], ["\n  width: 590px;\n  height: 100px;\n  margin: 10px 0 34px;\n  padding: 14px 19px 55px;\n  display: flex;\n  align-items: center;\n  border-radius: 10px;\n  background-color: #efefef;\n  z-index: 30;\n  overflow: hidden;\n"])));
var Backdrop = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  z-index: 10;\n  background-color: rgba(0, 0, 0, 0.2);\n"], ["\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  z-index: 10;\n  background-color: rgba(0, 0, 0, 0.2);\n"])));
var Share = function (_a) {
    var onClickToggleModal = _a.onClickToggleModal;
    useEffect(function () {
        var script = document.createElement("script");
        script.src = "https://developers.kakao.com/sdk/js/kakao.js";
        script.async = true;
        document.body.appendChild(script);
        return function () {
            document.body.removeChild(script);
        };
    }, []);
    return (React.createElement(ModalContainer, null,
        React.createElement(DialogBox, null,
            React.createElement(CloseBtn, { bottom: "10px", left: "330px", onClick: function () {
                    if (onClickToggleModal) {
                        onClickToggleModal();
                    }
                } }),
            React.createElement(LinkBox, null,
                React.createElement(CopyBtn, { bottom: "15px", left: "550px" }),
                "https::/rollingpage.com"),
            React.createElement(KakaoBtn, { onClick: function () {
                    kakaoShare();
                } })),
        React.createElement(Backdrop, { onClick: function (e) {
                e.preventDefault();
                if (onClickToggleModal) {
                    onClickToggleModal();
                }
            } })));
};
export default Share;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Share.js.map