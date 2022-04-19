var rootElement = document.querySelector("#root");

// let reactElement = React.createElement(
// 	"header",
// 	{ className: "header-wrapper" },
// 	React.createElement("h1", {}, "Hello React"),
// 	React.createElement("h2", {}, "The best JS framework")
// );

var reactElement = React.createElement(
	"header",
	null,
	React.createElement(
		"h1",
		null,
		"Hello JSX"
	),
	React.createElement(
		"h2",
		null,
		"Best framework!"
	),
	React.createElement(
		"p",
		null,
		"lorem"
	)
);

ReactDOM.render(reactElement, rootElement);