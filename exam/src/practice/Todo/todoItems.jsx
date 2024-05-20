import React from 'react';
import Item2 from './Item2';

const TodoItems = ({ todoItems , onDeleteClick}) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <Item2  todoName={item.name} todoDate={item.Date} onDeleteClick={onDeleteClick}  >
            </Item2> 
    
      ))}
    </div>
  );
};

export default TodoItems;
