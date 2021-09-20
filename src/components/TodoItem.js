/* eslint-disable react/prop-types */
import React from 'react';
import styles from './TodoItem.module.css';

function TodoItem({ todo, handleChangeProps, deleteTodoProps }) {
  const { completed, id, title } = todo;
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  return (
    <li className={styles.item}>
      <input type="checkbox" className={styles.checkbox} checked={completed} onChange={() => handleChangeProps(id)} />
      <button type="button" onClick={() => deleteTodoProps(id)}>Delete</button>
      <span style={completed ? completedStyle : null}>
        {title}
      </span>
    </li>
  );
}

export default TodoItem;
