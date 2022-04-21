import { useEffect } from "react";

export default function TodoItem({ id, text, onDelete }) {
	useEffect(() => {
		console.log(`${id} - Mounted`);

		return () => {
			console.log(`${id} - Unmounted`);
		};
	}, [id]);

	return (
		<li>
			{text} <button onClick={() => onDelete(id)}>X</button>
		</li>
	);
}
