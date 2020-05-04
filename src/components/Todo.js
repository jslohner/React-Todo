import React from 'react';

class Todo extends React.Component {
	constructor() {
		super();
		// this.state = {
		// 	itemData: {}
		// }
	}

	clickHandler = e => {
		// console.log('test');
		this.props.toggleItem(this.props.taskData);
	}

	render() {
		return (
			<p id={this.props.taskData.id} className='task-list-item' onClick={this.clickHandler}>{this.props.taskData.task}</p>
		);
	}
}

export default Todo;
