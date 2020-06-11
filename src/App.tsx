import React, { useState } from "react";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todo: string) => {
    const newTodo = { id: Math.random().toString(), text: todo };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div className='App'>
      <NewTodo addTodo={addTodoHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
