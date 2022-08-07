import React from 'react';
import { ModalWrapper, EmojiWrapper, PostWrapper, TitleText, Img, EmojiflexBox, ModalOver, ContentsWrapper } from "./emojiModalStyle";
import { BasicBtn } from "../../elements/buttons/button";
import Post from "../post/Post";
import Emoji1 from "../../assets/emoji-cute.svg";
import Emoji2 from "../../assets/emoji-sad.svg";
import Emoji3 from "../../assets/emoji-sad-fun.svg";
import Emoji4 from "../../assets/emoji-happy.svg";
import Emoji5 from "../../assets/emoji-teasing.svg";
import Emoji6 from "../../assets/emoji-angry.svg";
var EmojiModal = function () {
    return (React.createElement(ModalOver, null,
        React.createElement(ModalWrapper, null,
            React.createElement(ContentsWrapper, null,
                React.createElement(EmojiWrapper, null,
                    React.createElement(TitleText, null, "1. \uC2A4\uD2F0\uCEE4\uB97C \uACE8\uB77C\uBCFC\uAE4C\uC694?"),
                    React.createElement(EmojiflexBox, null,
                        React.createElement(Img, { width: 100, height: 100, src: Emoji1 }),
                        React.createElement(Img, { width: 100, height: 100, src: Emoji2 }),
                        React.createElement(Img, { width: 100, height: 100, src: Emoji3 }),
                        React.createElement(Img, { width: 100, height: 100, src: Emoji4 }),
                        React.createElement(Img, { width: 100, height: 100, src: Emoji5 }),
                        React.createElement(Img, { width: 100, height: 100, src: Emoji6 }))),
                React.createElement(PostWrapper, null,
                    React.createElement(TitleText, null, "2. \uB0B4\uC6A9\uC744 \uC791\uC131\uD574\uBD05\uC2DC\uB2E4!"),
                    React.createElement(Post, null))),
            React.createElement(BasicBtn, null, "\uC800\uC7A5"))));
};
export default EmojiModal;
//# sourceMappingURL=EmojiModal.js.map