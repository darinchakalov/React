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

	return (
		// fragment
		<>
			<ul>
				<TodoListItem>{count}</TodoListItem>
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

			<button onClick={() => setCount(count + 1)}>Increment</button>
		</>
	);
}

export default TodoList;
