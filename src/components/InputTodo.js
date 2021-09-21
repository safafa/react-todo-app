/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const InputTodo = ({ addTodoProps }) => {
  const [title, setTitle] = useState('');
  const onChange = (e) => {
    setTitle(() => e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoProps(title);
      setTitle('');
    } else {
      alert('Please write item');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo..."
        className="input-text"
        value={title}
        name="title"
        onChange={onChange}
      />
      <button type="submit" className="input-submit">Submit</button>
    </form>
  );
};
export default InputTodo;
