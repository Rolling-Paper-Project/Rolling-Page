var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/* eslint-disable react-hooks/rules-of-hooks */
import * as React from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import axios from "axios";
import Post from "../post/Post";
import { BASE_URL, TOKEN } from "../../constants/index";
var ContainerStyled = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  position: relative;\n  width: 1400px;\n  height: 750px;\n  margin: 0 auto;\n  border: 1px solid #efefef;\n  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);\n"], ["\n  box-sizing: border-box;\n  position: relative;\n  width: 1400px;\n  height: 750px;\n  margin: 0 auto;\n  border: 1px solid #efefef;\n  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);\n"])));
var BoardTitleStyled = styled.h2(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: fit-content;\n  font-weight: 300;\n  font-size: 35px;\n  line-height: 44px;\n  color: #977ae1;\n  padding: 16px 0 24px 31px;\n"], ["\n  width: fit-content;\n  font-weight: 300;\n  font-size: 35px;\n  line-height: 44px;\n  color: #977ae1;\n  padding: 16px 0 24px 31px;\n"])));
var BoardTextStyled = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: fit-content;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-weight: 400;\n  font-size: 22px;\n"], ["\n  width: fit-content;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-weight: 400;\n  font-size: 22px;\n"])));
var BoardButtonStyled = styled.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  color: white;\n  background-color: #977ae1;\n  font-size: 45px;\n  border: none;\n  bottom: 29px;\n  right: 48px;\n"], ["\n  position: absolute;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  color: white;\n  background-color: #977ae1;\n  font-size: 45px;\n  border: none;\n  bottom: 29px;\n  right: 48px;\n"])));
var TestBtn = styled.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 50px;\n  cursor: pointer;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n"], ["\n  width: 50px;\n  cursor: pointer;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n"])));
var BoardPostUl = styled.ul(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  height: 520px;\n  margin-bottom: 148px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  padding: 0 31px;\n  overflow-y: scroll;\n\n  &::-webkit-scrollbar {\n    width: 7px;\n  }\n  &::-webkit-scrollbar-thumb {\n    background: #977ae1;\n    border-radius: 6px;\n  }\n  &::-webkit-scrollbar-track {\n    background: white;\n  }\n"], ["\n  height: 520px;\n  margin-bottom: 148px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  padding: 0 31px;\n  overflow-y: scroll;\n\n  &::-webkit-scrollbar {\n    width: 7px;\n  }\n  &::-webkit-scrollbar-thumb {\n    background: #977ae1;\n    border-radius: 6px;\n  }\n  &::-webkit-scrollbar-track {\n    background: white;\n  }\n"])));
var Container = function () {
    var id = useParams().id;
    var _a = React.useState(false), toggle = _a[0], setToggle = _a[1];
    var _b = React.useState([]), postData = _b[0], setPostData = _b[1];
    var colorArray = [
        "#E5EDFF, #B6CCFF",
        "#FBF1F6, #F9CCE3",
        "#EAE7F5, #CBC2FA",
        "#FCF6D8, #FCEEAB",
    ];
    var clickedToggle = function () {
        setToggle(function (prev) { return !prev; });
    };
    var setPost = function () { return __awaiter(void 0, void 0, void 0, function () {
        var url, config, res, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "".concat(BASE_URL, "/post/").concat(id, "/comments");
                    config = {
                        headers: {
                            Authorization: "Bearer ".concat(TOKEN),
                            "Content-type": "application/json",
                        },
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios.get(url, config)];
                case 2:
                    res = _a.sent();
                    setPostData(res.data.comments);
                    return [2 /*return*/, res.data.comments];
                case 3:
                    err_1 = _a.sent();
                    return [2 /*return*/, err_1];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    React.useEffect(function () {
        setPost();
    }, []);
    return (React.createElement(ContainerStyled, null,
        React.createElement(TestBtn, { onClick: clickedToggle }, "test Button"),
        React.createElement(BoardTitleStyled, null, "\uB0B4\uAC00 \uC124\uC815\uD55C \uBCF4\uB4DC \uC774\uB984"),
        toggle ? (React.createElement(BoardTextStyled, null, "\uC0C8\uB85C\uC6B4 \uB864\uB9C1\uD398\uC774\uD37C\uB97C \uB9CC\uB4E4\uC5B4\uBCF4\uC138\uC694!")) : (React.createElement(BoardPostUl, null, postData === null || postData === void 0 ? void 0 : postData.map(function (element) {
            var randomIdx = Math.floor(Math.random() * 3 + 1);
            var randomColor = colorArray[randomIdx].split(",");
            var bgColor = randomColor[0];
            var shadowColor = randomColor[1];
            var comment = element.content.split(",");
            var content = comment[0];
            var name = comment[1];
            var profile = comment[2];
            return (React.createElement(Post, { key: element.id, bgColor: bgColor, shadowColor: shadowColor, content: content, name: name, profile: profile }));
        }))),
        React.createElement(BoardButtonStyled, null, "+")));
};
export default Container;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
// BoardMain element
// title element (input value 가져오기)
// BoardButton element (클릭시 생성모달 출력)
// 리액트에서 클릭 시 컴포넌트 불러오는 방법
// 모달에서 생성 버튼 클릭시 false 부분 출력되도록 우선 localStorage에서 postId 값으로 진행?
//# sourceMappingURL=Container.js.map