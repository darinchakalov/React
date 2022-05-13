import { useAuth } from "../contexts/AuthContext.js";
import { Navigate } from "react-router-dom";

export function isAuth(Component) {
	function WrapperComponent(props) {
		const { isAuthenticated } = useAuth();

		return isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />;
	}

	return WrapperComponent;
}
