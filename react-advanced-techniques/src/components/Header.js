import { Nav, Navbar, Container, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.js";

const Header = () => {
	//Use custom Hook to import the auth state instead of useContext(AuthState)
	const { user } = useAuth();
	return (
		<Navbar bg="light" expand="lg">
			<Container fluid>
				<Navbar.Brand to="/" as={Link}>
					My App
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
						<Nav.Link href="#action1">Home</Nav.Link>
						<Nav.Link to="/login" as={Link}>
							Login
						</Nav.Link>
						<Nav.Link to="/my-list" as={Link}>
							Dogs
						</Nav.Link>
						<NavDropdown title="Link" id="navbarScrollingDropdown">
							<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="#" disabled>
							Link
						</Nav.Link>
					</Nav>
					<Nav.Link to="/profile">{user.email}</Nav.Link>
					<Form className="d-flex">
						<FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
						<Button variant="outline-success">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
