import "./App.css";
import { useEffect, useState } from "react";

function App() {
	const stateResult = useState("");

	const name = stateResult[0];
	const setName = stateResult[1];

	useEffect(() => {
		setTimeout(() => {
			setName("Pesho");
		}, 1500);
	}, []);

	return (
		<div className="App">
			<h2>{!name ? "Loading..." : name}</h2>
		</div>
	);
}

export default App;
