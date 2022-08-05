import React from "react";
import { Link } from "react-router-dom";
import { HeaderWrap, HeaderContent, LinkButton } from "./headerStyle";
import logo from "../../assets/icon-logo.svg";
import github from "../../assets/icon-github.svg";
var Header = function () {
    var onClick = function () {
        return window.open("https://github.com/Rolling-Paper-Project/Rolling-Page#readme");
    };
    return (React.createElement(HeaderWrap, null,
        React.createElement("h1", { className: "ir" }, "\uB864\uB9C1\uD398\uC774\uC9C0"),
        React.createElement(HeaderContent, null,
            React.createElement(Link, { to: "/", target: "_blank" },
                React.createElement("img", { src: logo, alt: "\uB85C\uACE0" })),
            React.createElement(LinkButton, { onClick: onClick },
                "Contact Us",
                React.createElement("img", { src: github, alt: "github" })))));
};
export default Header;
//# sourceMappingURL=Header.js.map