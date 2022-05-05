import "./App.css";
import { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList.js";

function App() {
	const stateResult = useState("");
	const name = stateResult[0];
	const setName = stateResult[1];
	const [count, setCount] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setName("Pesho");
		}, 1500);
	}, []);

	return (
		<div className="App">
			<h2>{!name ? "Loading..." : name}</h2>
			<p>{count}</p>
			<button onClick={() => setCount((x) => x + 1)}>Increase</button>
			<CharacterList />
		</div>
	);
}

export default App;
