import { useState } from "react";
import uniqid from "uniqid";

import TodoItem from "./TodoItem.js";

export default function TodoList() {
	const [todos, setTodos] = useState([
		{ id: 1, text: "Clean my room", isDone: false },
		{ id: 2, text: "Wash the dishes", isDone: false },
		{ id: 3, text: "Go to the gym", isDone: false },
	]);

	const onChangeHandler = (e) => {
		let todo = { id: uniqid(), text: e.target.value, isDone: false };

		setTodos((oldTodos) => [...oldTodos, todo]);

		e.target.value = "";
	};

	const deleteTodoItemClickHandler = (id) => {
		setTodos((oldTodos) => oldTodos.filter((x) => x.id !== id));
	};

	const checkedTodoItemClickHandeler = (id) => {
		setTodos((oldTodos) => {
			let currentClickedItem = todos.find((x) => x.id === id);
			let toggledTodo = { ...currentClickedItem, isDone: !currentClickedItem.isDone };
			let restTodos = oldTodos.filter((x) => x.id !== id);

			return [...restTodos, toggledTodo];
		});
	};

	return (
		<>
			<input type="text" name="todo" onBlur={onChangeHandler} />
			<ul>
				{todos.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
						onDelete={deleteTodoItemClickHandler}
						onCheck={checkedTodoItemClickHandeler}
					/>
				))}
			</ul>
		</>
	);
}
