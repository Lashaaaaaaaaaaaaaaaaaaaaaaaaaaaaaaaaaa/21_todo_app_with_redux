import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  const handleToggle = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => handleToggle(todo.id)}>
              {todo.isDone ? 'Undo' : 'Done'}
            </button>
            <button onClick={() => handleDelete(todo.id)} style={{ color: 'red' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
