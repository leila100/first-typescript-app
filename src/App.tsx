import React, { useState } from "react";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

const App: React.FC = () => {
  // const todos = [{ id: "td1", text: "Finish course" }];
  const [todos, setTodos] = useState([{ id: "td1", text: "Finish course" }]);

  const addTodoHandler = (todo: string) => {
    const newTodo = { id: "td2", text: todo };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  return (
    <div className='App'>
      <NewTodo addTodo={addTodoHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
