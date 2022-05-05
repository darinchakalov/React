import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch.js";

export default function CharacterList() {
	const characters = useFetch("https://swapi.dev/api/people/");
	return (
		<ul>
			{characters.map((x) => (
				<li key={x.name}>{x.name}</li>
			))}
		</ul>
	);
}
