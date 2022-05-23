import React, { useCallback, useState } from 'react';
import './TodoInsert.scss';
import { MdAdd } from 'react-icons/md';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      //새로고침 방지
      e.preventDefault();
    },
    [onInsert, value],
  );
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        value={value}
        onChange={onChange}
        placeholder="할일을 입력하세요"
        type={'text'}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
