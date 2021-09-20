/* eslint-disable react/prop-types */
import React from 'react';

function TodoItem({ todo, handleChangeProps, deleteTodoProps }) {
  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={() => handleChangeProps(todo.id)} />
      <button type="button" onClick={() => deleteTodoProps(todo.id)}>Delete</button>
      {' '}
      {todo.title}
    </li>
  );
}

export default TodoItem;
