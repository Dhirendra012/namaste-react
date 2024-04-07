import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// -> React Element is not an HTML Element but its a plain object and when we render this on DOM 
// its become HTML Element
// const heading = React.createElement("h1" ,{ id: "heading"}, "Namaste React :) ");

// JSX - HTML-like or XML-like syntax
// --> JSX (trasnspiled before it reaches the JS)
// -> (Transpiling is done by Parcel with the Help of Babel)
// JSX --> Parcel --> Babel --> JS
// JSX => Babel transpiled it to React.createElement => React-Js object => HTMLElement(render)
// --> For Multiline in JSX you have to wrap in inside brackets "( )" to know the starting and ending point

// const heading = (
//     <h1 className="head">
//         Namaste React using JSX
//     </h1>);

// React Component
// -> Class-based components -> OLD -> uses javascript class
// -> Functional-based components -> NEW -> uses javascript function 

// ----> Functional-Based Components
// -> It is a function which returns JSX or React Elements

// const Heading = () => 
// {
//     return <h1>Namaste React</h1>;
// }

const ele = <span>Dhirendra Singh</span>;

const heading = (
    <h1 className="head">
        {ele}
        Namaste React using JSX
    </h1>);

const Title = () => 
(
    <h1>Namaste React Its A Title</h1>
);

// Component Composition -> using component uing component
// you can done it by writting component in  '< fn />' or { fn() } or <fn></fn>
// --> You can inject any javascript code in '{ }' in component

const Heading = () => (
    <div id="heading">
        <Title/>
        <Title></Title>
        {Title()}
        {heading} 
        <h1>Namaste React</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// For rendering Function Componets
root.render(<Heading/>);