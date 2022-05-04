import { Component } from "react";

class HobbyList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hobbies: [],
			selectedHobbies: null,
		};
	}

	render() {
		console.log(this.props);
		return (
			<ul>
				<li>Swimming</li>
				<li>Flying</li>
				<li>Table tennis</li>
			</ul>
		);
	}
}

export default HobbyList;
