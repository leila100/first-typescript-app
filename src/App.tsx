import React from "react";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

const App: React.FC = () => {
  const todos = [{ id: "td1", text: "Finish course" }];

  return (
    <div className='App'>
      <NewTodo />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
