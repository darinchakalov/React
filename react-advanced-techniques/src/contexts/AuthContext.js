import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

const initialstate = {
	_id: "",
	email: "",
};

//This is a component
export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(initialstate);

	const login = (email, password) => {
		setUser({ email });
	};

	//Returning the AuthContext instead of providing it to the App
	return <AuthContext.Provider value={{ user, login }}>{children}</AuthContext.Provider>;
};

//Custom Hook to return auth state
export const useAuth = () => {
	const authState = useContext(AuthContext);
	return authState;
};
