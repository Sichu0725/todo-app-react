import React, { useState, useRef, useCallback } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoLIst';
import TodoTemplate from './components/TodoTemplate';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트 과제', checked: true },
    { id: 2, text: '기능 구현하기', checked: true },
    { id: 3, text: '일정관리앱만들기', checked: false },
  ]);

  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const todo = { id: nextId.current, text: text, checked: false };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todoItem) => todoItem.id !== id));
    },
    [todos],
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} />
    </TodoTemplate>
  );
};

export default App;
