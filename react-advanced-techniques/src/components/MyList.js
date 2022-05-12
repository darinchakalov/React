import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext.js";
import { Navigate } from "react-router-dom";
export default function MyList() {
	const [dogs, setDogs] = useState([]);
	const { user } = useAuth();

	useEffect(() => {
		fetch("https://dog.ceo/api/breeds/image/random/3")
			.then((res) => res.json())
			.then((data) => setDogs(data.message))
			.catch((err) => console.log(err));
	}, []);

	if (!user.email) {
		return <Navigate to="/login" />;
	}

	return (
		<Carousel style={{ color: "black" }}>
			{dogs.map((dog) => (
				<Carousel.Item style={{ maxHeight: "500px", color: "black" }}>
					<img className="d-block w-100" src={dog} alt="First slide" />
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
}
