import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import DoneTodos from './components/DoneTodos';

function App() {
  return (
    <div>
      <h1>Todo App with Redux</h1>
      <AddTodo />
      <TodoList />
      <DoneTodos />
    </div>
  );
}

export default App;

