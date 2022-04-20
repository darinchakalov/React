// HOW TO CLASS COMPONENT

import TodoListItem from "./TodoListItem.js";

// import React from "react";

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
	return (
		<ul>
			<TodoListItem text="Clean room"></TodoListItem>
			<TodoListItem text="Go Shopping"></TodoListItem>
			<TodoListItem text="Learn React"></TodoListItem>
		</ul>
	);
}

export default TodoList;
