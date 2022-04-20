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
			{/* How to do it with props.children */}
			<TodoListItem>Clean room</TodoListItem>
			{/* How to do it with props.text for instance */}
			{/* <TodoListItem text="Go Shopping"></TodoListItem> */}
			<TodoListItem>Go Shopping</TodoListItem>
			<TodoListItem>Learn React</TodoListItem>
		</ul>
	);
}

export default TodoList;
