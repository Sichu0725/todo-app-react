import React, { useCallback } from 'react';
import './TodoListItem.scss';
import cn from 'classnames';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';

const TodoListItem = ({ todo, key, onRemove }) => {
  const { id, text, checked } = todo;

  const onClick = useCallback(() => {
    onRemove(id);
  }, [onRemove, id]);

  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={onClick}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
