import "./App.css";
import TodoList from "./components/TodoList.js";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Counter App</h1>
			</header>

			<main>
				<h2>Counter</h2>
				<TodoList />
			</main>

			<footer>
				<p>All rights reserved &copy;</p>
			</footer>
		</div>
	);
}

export default App;
