import "./App.css";
import { useState, useEffect } from "react";

function App() {
	let [username, setUsername] = useState("Pesho");

	const onChangeHandler = (e) => {
		setUsername(e.currentTarget.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		let formData = new FormData(e.currentTarget);
		let { username, password } = Object.fromEntries(formData);
		console.log(username);
	};

  const onServiceChange = (e) => {
    setUsername('')
  }

	return (
		<div className="App">
			<form method="POST" onSubmit={submitHandler}>
				<div>
					<label htmlFor="username">Name</label>
					<input type="text" name="username" value={username} onChange={onChangeHandler} />
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input type="password" name="password" defaultValue="asd" />
				</div>
				<div>
					<label htmlFor="services">Services</label>
					<select name="services" onChange={onServiceChange}>
						<option value="1">Private client</option>
						<option value="2">Business client</option>
						<option value="3">Enterprise client</option>
					</select>
				</div>
				<div>
					<label htmlFor="rememberme">Remember me</label>
					<input type="checkbox" name="rememberme" defaultChecked />
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
	);
}

export default App;
