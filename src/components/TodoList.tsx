import * as React from "react";

export interface TodoListProps {
  items: { id: string; text: string }[];
  deleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, deleteTodo }) => {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
