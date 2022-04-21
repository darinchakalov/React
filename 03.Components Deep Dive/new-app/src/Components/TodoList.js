import { useState } from "react";
import uniqid from "uniqid";

import TodoItem from "./TodoItem.js";

export default function TodoList() {
	const [todos, setTodos] = useState([
		{ id: 1, text: "Clean my room" },
		{ id: 2, text: "Wash the dishes" },
		{ id: 3, text: "Go to the gym" },
	]);

	const onChangeHandler = (e) => {
		let todo = { id: uniqid(), text: e.target.value };

		setTodos((oldTodos) => [...oldTodos, todo]);

		e.target.value = "";
	};

	const deleteTodoItemClickHandler = (id) => {
		setTodos((oldTodos) => oldTodos.filter((x) => x.id !== id));
	};

	return (
		<>
			<input type="text" name="todo" onBlur={onChangeHandler} />
			<ul>
				{todos.map((todo) => (
					<TodoItem
						key={todo.id}
						id={todo.id}
						text={todo.text}
						onDelete={deleteTodoItemClickHandler}
					></TodoItem>
				))}
			</ul>
		</>
	);
}
