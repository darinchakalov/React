function TodoListItem(props) {
	return (
		<li style={{ color: props.color }}>
			{props.children} - {props.name}
		</li>
	);
}

export default TodoListItem;
