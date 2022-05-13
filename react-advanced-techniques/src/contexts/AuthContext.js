import { createContext, useContext, useState, useReducer } from "react";

export const AuthContext = createContext();

const initialstate = {
	_id: "",
	email: "",
};

const reducer = (state, action) => {
	//state is the initial state and action is the newly provided one

	switch (action.type) {
		case "LOGIN":
			return { ...state, email: action.payload };
		case "LOGOUT":
			return initialstate;
		default:
			return state;
	}

	// return {
	// 	email: action,
	// };
};

//This is a component
export const AuthProvider = ({ children }) => {
	// const [user, setUser] = useState(initialstate);
	const [user, dispatch] = useReducer(reducer, initialstate);

	const login = (email, password) => {
		// setUser({ email });
		dispatch({
			type: "LOGIN",
			payload: email,
		});
	};

	const logout = () => {
		dispatch({ type: "LOGOUT" });
	};

	//Returning the AuthContext instead of providing it to the App
	return (
		<AuthContext.Provider value={{ user, login, logout, isAuthenticated: Boolean(user.email) }}>
			{children}
		</AuthContext.Provider>
	);
};

//Custom Hook to return auth state
export const useAuth = () => {
	const authState = useContext(AuthContext);
	return authState;
};
