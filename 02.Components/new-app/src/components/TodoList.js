import React from "react";

import TodoListItem from "./TodoListItem.js";

// HOW TO CLASS COMPONENT
// class TodoList extends React.Component {
// 	render() {
// 		return (
// 			<ul>
// 				<li>Clean your room</li>
// 				<li>Go Shopping</li>
// 				<li>Learn React</li>
// 			</ul>
// 		);
// 	}
// }

function TodoList() {
	let [count, setCount] = React.useState(0);
	let [name, setName] = React.useState("");

	const inputChangeHandler = (e) => {
		setName(e.target.value);
	};

	return (
		// fragment
		<>
			<ul>
				<TodoListItem name={name}>{count}</TodoListItem>
				{/* {todos.map((todo) => (
					<TodoListItem>{todo}</TodoListItem>
				))} */}

				{/* How to do it with props.children
			<TodoListItem>Clean room</TodoListItem>
			How to do it with props.text for instance
			<TodoListItem text="Go Shopping"></TodoListItem>
			<TodoListItem>Go Shopping</TodoListItem>
			<TodoListItem>Learn React</TodoListItem> */}
			</ul>
			<input type="" onChange={inputChangeHandler} />
			<button onClick={() => setCount(count + 1)}>Increment</button>
			{/* Same as above */}
			{/* <button onClick={setCount.bind(null, count + 1)}>Increment</button> */}
		</>
	);
}

export default TodoList;
