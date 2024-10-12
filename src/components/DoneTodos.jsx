import React from 'react';
import { useSelector } from 'react-redux';

const DoneTodos = () => {
  const todos = useSelector(state => state.todos);
  const doneTodos = todos.filter(todo => todo.isDone);

  return (
    <div>
      <h2>Done Todos</h2>
      <ul>
        {doneTodos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default DoneTodos;
