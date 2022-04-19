var rootElement = document.querySelector("#root");

var reactElement = React.createElement("header", { className: "header-wrapper" }, React.createElement("h1", {}, "Hello React"), React.createElement("h2", {}, "The best JS framework"));

ReactDOM.render(reactElement, rootElement);