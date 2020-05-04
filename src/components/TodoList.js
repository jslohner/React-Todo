import React from 'react';

import './Todo.css';

import Todo from './Todo.js';

class TodoList extends React.Component {
	render() {
		return (
			<div>
				<h2>Todo List</h2>
				{
					this.props.taskList.map(taskData => {
						return <Todo key={taskData.id} taskData={taskData} toggleItem={this.props.toggleItem}/>
					})
				}
			</div>
		);
	}
}

export default TodoList;
