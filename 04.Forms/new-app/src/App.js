import "./App.css";

function App() {
	const submitHandler = (e) => {
		e.preventDefault();

		let formData = new FormData(e.currentTarget);
		let { username, password } = Object.fromEntries(formData);
		

    
	};

	return (
		<div className="App">
			<form method="POST" onSubmit={submitHandler}>
				<label htmlFor="username">Name</label>
				<input type="text" name="username" />
				<label htmlFor="password">Password</label>
				<input type="password" name="password" />
				<button type="submit">Login</button>
			</form>
		</div>
	);
}

export default App;
