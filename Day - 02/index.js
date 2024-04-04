// import React from "react";
// import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello world from react!");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement(
            "div",
            { id: "child" },
            [React.createElement("h1", {}, "Im a h1 tag"),
            React.createElement("h2", {}, "Im a h2 tag")]
        ),
        React.createElement(
            "div",
            { id: "child" },
            [React.createElement("h1", {}, "Im a h1 tag"),
            React.createElement("h2", {}, "Im a h2 tag")]
        ),
    ]
);
root.render(parent);
console.log("wow");
/*
React element is javascrip object
*/