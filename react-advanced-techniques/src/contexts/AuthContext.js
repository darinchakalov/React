import { createContext, useState } from "react";

export const AuthContext = createContext();

const initialstate = {
	_1d: "",
	email: "test",
	accessToken: "",
};

//This is a component
export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(initialstate);

	//Returning the AuthContext instead of providing it to the App
	return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};
