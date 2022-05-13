import "./App.css";
import { Route, Routes } from "react-router";
import { AuthProvider } from "./contexts/AuthContext.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.js";
import Login from "./components/Login.js";
import MyList from "./components/MyList.js";
import ErrorBoundry from "./ErrorBoundry.js";

function App() {
	return (
		<ErrorBoundry>
			<AuthProvider>
				<div className="site-wrapper">
					<Header />
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="/my-list" element={<MyList />} />
					</Routes>
				</div>
			</AuthProvider>
		</ErrorBoundry>
	);
}

export default App;
