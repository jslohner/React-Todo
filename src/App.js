import React from 'react';

import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';

const taskList = [];

// const taskList = [
// 	{
// 		task: 'Organize Garage',
// 		id: 1528817077286,
// 		completed: false
// 	},
// 	{
// 		task: 'Bake Cookies',
// 		id: 1528817084358,
// 		completed: false
// 	}
// ];

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
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

	clearCompleted = () => {

	}

	render() {
		return (
			<div>
				<h2>Welcome to your Todo App!</h2>
				<TodoList taskList={this.state.taskList} toggleItem={this.toggleItem}/>
				<TodoForm addItem={this.addItem} clearCompleted={this.clearCompleted}/>
			</div>
		);
	}
}

export default App;
