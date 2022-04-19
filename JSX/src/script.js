let rootElement = document.querySelector("#root");

// let reactElement = React.createElement(
// 	"header",
// 	{ className: "header-wrapper" },
// 	React.createElement("h1", {}, "Hello React"),
// 	React.createElement("h2", {}, "The best JS framework")
// );

let reactElement = (
	<header>
		<h1>Hello JSX</h1>
		<h2>Best framework!</h2>
		<p>lorem</p>
	</header>
);

ReactDOM.render(reactElement, rootElement);
