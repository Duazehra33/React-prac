import React, { useState } from 'react';
import AppName from './practice/Todo/AppName';
import './App.css';
import TodoItems from './practice/Todo/todoItems';
import AddTodo from './practice/Todo/AddTodo';
import Welcome from './welcome';

function App() {
  const [todoItems, setTodoItems] = useState([
    { name: 'Buy Milk', dueDate: '4/10/2023' },
    { name: 'Go to college', dueDate: '4/10/2023' },
    { name: 'Buy Chocos', dueDate: '4/10/2023' },
  ]);

  const handleNewItem = (itemName, itemDate) => {
    const newTodoItems = [...todoItems, { name: itemName, dueDate: itemDate }];
    setTodoItems(newTodoItems);
  };
const handleDeleteItem = (todoItemName) => {
  const newTodoItems = todoItems.filter (item => item.name !== todoItemName);
  setTodoItems(newTodoItems);
  console.log(`Item deleted:${todoItemName}`);
  
};
return (
    <div className='container text-center'>
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <Welcome />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </div>
  );
}

export default App;
