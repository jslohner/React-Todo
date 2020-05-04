import React from 'react';

import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';

const taskList = [];

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			taskList
		};
	}

	addItem = itemName => {
		const newItem = {
			task: itemName,
			id: Date.now(),
			completed: false
		}

		this.setState({
			taskList: [...this.state.taskList, newItem]
		});
	}

	toggleItem = itemData => {
		if(!itemData.completed) {
			itemData.completed = true;
			document.getElementById(`${itemData.id}`).style = 'text-decoration: line-through';
		}
		else {
			itemData.completed = false;
			document.getElementById(`${itemData.id}`).style = 'text-decoration: none';
		}

		this.setState({
			...this.state.taskList,
			[itemData.completed]: itemData.completed
		});
	}

	clearHandler = () => {
		this.setState({
			taskList: [...this.state.taskList.filter(taskData => !taskData.completed)]
		});
	}

	render() {
		return (
			<div>
				<h2>Welcome to your Todo App!</h2>
				<TodoList taskList={this.state.taskList} toggleItem={this.toggleItem}/>
				<TodoForm addItem={this.addItem} clearHandler={this.clearHandler}/>
			</div>
		);
	}
}

export default App;
