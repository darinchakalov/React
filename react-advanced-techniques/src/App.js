import "./App.css";
import { Route, Routes } from "react-router";
import { AuthProvider } from "./contexts/AuthContext.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.js";
import Login from "./components/Login.js";
import MyList from "./components/MyList.js";

function App() {
	return (
		<AuthProvider>
			<div className="site-wrapper">
				<Header />
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/my-list" element={<MyList />} />
				</Routes>
			</div>
		</AuthProvider>
	);
}

export default App;
