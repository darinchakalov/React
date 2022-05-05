import { useEffect, useState } from "react";

export default function useFetch(url) {
	const [state, setState] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((result) => setState(result.results));
	}, []);

	return state;
}
