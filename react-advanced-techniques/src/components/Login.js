import { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext.js";

export default function Login() {
	const navigate = useNavigate();
	const { login } = useContext(AuthContext);

	throw new Error("Some error");

	const loginHandler = (e) => {
		e.preventDefault();

		const { email, password } = Object.fromEntries(new FormData(e.currentTarget));

		login(email, password);
		navigate("/");
	};

	return (
		<Form onSubmit={loginHandler}>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" name="email" placeholder="Enter email" />
				<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" name="password" placeholder="Password" />
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicCheckbox">
				<Form.Check type="checkbox" label="Check me out" />
			</Form.Group>
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
}
