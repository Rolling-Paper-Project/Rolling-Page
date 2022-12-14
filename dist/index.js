import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/app";
var rootElement = document.getElementById("root");
if (!rootElement)
    throw new Error("Failed to find the root element");
var root = createRoot(rootElement);
root.render(React.createElement(React.StrictMode, null,
    React.createElement(App, null)));
//# sourceMappingURL=index.js.map