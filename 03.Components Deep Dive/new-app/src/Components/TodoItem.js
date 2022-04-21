// import { useEffect } from "react";
import styles from "./TodoItem.module.css";

export default function TodoItem({ todo, onDelete, onCheck }) {
	// useEffect(() => {
	// 	console.log(`${id} - Mounted`);

	// 	return () => {
	// 		console.log(`${id} - Unmounted`);
	// 	};
	// }, [id]);

	return (
		<li onClick={() => onCheck(todo.id)} className={todo.isDone ? styles["todo-item"] : ""}>
			{todo.text} <button onClick={(e) => onDelete(e, todo.id)}>X</button>
		</li>
	);
}
