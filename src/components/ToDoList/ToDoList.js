import classNames from 'classnames';
import React from 'react';
import './ToDoList.css';

const ToDoList = ({ todos, deleteToDo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, description, completed }) => {
      return (
        <li
          key={id}
          className={classNames('TodoList__item', {
            'TodoList__item--completed': completed,
          })}
        >
          <input
            type="checkbox"
            className="TodoList__checkbox"
            id={id}
            name="completed"
            checked={completed}
            onChange={() => onToggleCompleted(id)}
          />
          <p className="TodoList__description">{description}</p>

          <button
            type="button"
            className="TodoList__btn"
            onClick={() => deleteToDo(id)}
          >
            Удалить
          </button>
        </li>
      );
    })}
  </ul>
);

export default ToDoList;
