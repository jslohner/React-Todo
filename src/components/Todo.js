import React from 'react';

class Todo extends React.Component {
	clickHandler = e => {
		this.props.toggleItem(this.props.taskData);
	}

	render() {
		return (
			<p id={this.props.taskData.id} className={`task-list-item ${this.props.taskData.completed ? ' completed' : ''}`} onClick={this.clickHandler}>{this.props.taskData.task}</p>
		);
	}
}

export default Todo;
