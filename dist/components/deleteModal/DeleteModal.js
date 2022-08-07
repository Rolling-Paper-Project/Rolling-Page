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
import * as React from "react";
import { useParams } from "react-router";
import axios from "axios";
import { BasicBtn, CancelBtn } from "../../elements/buttons/button";
import './deleteModalStyle';
import { BtnWrap, ModalBg, ModalExp, ModalTitle, ModalWrap } from "./deleteModalStyle";
import { BASE_URL, TOKEN } from "../../constants/index";
var DeletModal = function (_a) {
    var key = _a.key, closeDeleteModal = _a.closeDeleteModal;
    var id = useParams().id;
    var deletePost = function () { return __awaiter(void 0, void 0, void 0, function () {
        var url, config, res, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "".concat(BASE_URL, "/post/").concat(id, "/comments/").concat(key);
                    config = {
                        headers: {
                            Authorization: "Bearer ".concat(TOKEN),
                            "Content-type": "application/json",
                        },
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios.delete(url, config)];
                case 2:
                    res = _a.sent();
                    return [2 /*return*/, res];
                case 3:
                    err_1 = _a.sent();
                    return [2 /*return*/, err_1];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(React.Fragment, null,
        React.createElement(ModalWrap, null,
            React.createElement(ModalTitle, null, "\uC815\uB9D0\uB85C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"),
            React.createElement(ModalExp, null, "\uC0AD\uC81C\uD558\uBA74 \uB418\uB3CC\uB9B4 \uC218 \uC5C6\uC5B4\uC694! :("),
            React.createElement(BtnWrap, null,
                React.createElement(CancelBtn, { onClick: closeDeleteModal }, "\uCDE8\uC18C"),
                React.createElement(BasicBtn, { onClick: deletePost }, "\uC0AD\uC81C"))),
        React.createElement(ModalBg, null)));
};
export default DeletModal;
//# sourceMappingURL=DeleteModal.js.map