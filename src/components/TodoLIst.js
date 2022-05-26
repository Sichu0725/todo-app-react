import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => {
        return (
          <TodoListItem
            todo={todo}
            onToggle={onToggle}
            key={todo.id}
            onRemove={onRemove}
          />
        );
      })}
    </div>
  );
};

export default React.memo(TodoList);
