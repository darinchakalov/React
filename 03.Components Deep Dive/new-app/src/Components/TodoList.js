import { useEffect, useState } from "react";
import uniqid from "uniqid";

import TodoItem from "./TodoItem.js";

const API_URL = "http://localhost:3030/jsonstore/tasks";

export default function TodoList() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch(API_URL)
			.then((res) => res.json())
			.then((result) => setTodos(Object.values(result)));
	}, []);

	const onChangeHandler = (e) => {
		let todo = { id: uniqid(), text: e.target.value, isDone: false };

		setTodos((oldTodos) => [...oldTodos, todo]);

		e.target.value = "";
	};

	const deleteTodoItemClickHandler = (e, id) => {
		e.stopPropagation();
		setTodos((oldTodos) => oldTodos.filter((x) => x.id !== id));
	};

	const checkedTodoItemClickHandeler = (id) => {
		setTodos((oldTodos) => {
			let currentClickedItem = todos.find((x) => x.id === id);
			let currentClickedItemIndex = todos.findIndex((x) => x.id === id);
			let toggledTodo = { ...currentClickedItem, isDone: !currentClickedItem.isDone };
			// let restTodos = oldTodos.filter((x) => x.id !== id);

			return [
				...oldTodos.slice(0, currentClickedItemIndex),
				toggledTodo,
				...oldTodos.slice(currentClickedItemIndex + 1),
			];
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
