import { useContext } from "react";
import useFetch from "../hooks/useFetch.js";
import AuthContext from "../contexts/authContext.js";

export default function CharacterList() {
	const count = useContext(AuthContext);
	const characters = useFetch("https://swapi.dev/api/people/");
	return (
		<>
			<ul>
				{characters.map((x) => (
					<li key={x.name}>{x.name}</li>
				))}
			</ul>
			<div>{count}</div>
		</>
	);
}
