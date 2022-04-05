import { check } from 'prettier';
import React from 'react';

const ToDoList = ({ todos, deleteToDo }) => (
  <ul>
    {todos.map(({ id, description, completed }) => (
      <li key={id}>
        <input type="text" defaultValue={description} />
        <input type="checkbox" id={id} name="completed" />
        <button type="button" onClick={() => deleteToDo(id)}>
          {' '}
          Удалить{' '}
        </button>
      </li>
    ))}
  </ul>
);

export default ToDoList;
