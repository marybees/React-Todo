import React from 'react';
// import TodoList from "./components/TodoList";
// import TodoForm from "./components/TodoForm";
// import "./components/Todo.css";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      task: '',
      id: Date.now(),
      completed: false
    };

    addItem = (itemName) => {
      const newItem = {
        task: itemName,
        id: new Date(),
        completed: false
      };
      this.setState({
        chores: [...this.state.chores, newItem]
      });
    };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          groceries={this.state.chores}
        />
      </div>
    );
  }
}

export default App;
