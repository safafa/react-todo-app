/* eslint-disable react/prop-types */
import React from 'react';
import TodoItem from './TodoItem';

const TodosList = ({ todos, handleChangeProps, deleteTodoProps }) => (
  <ul>
    { todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChangeProps={handleChangeProps}
        deleteTodoProps={deleteTodoProps}
      />
    ))}
  </ul>
);

export default TodosList;
