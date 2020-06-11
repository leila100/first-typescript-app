import React, { useRef } from "react";

type NewTodoProps = {
  addTodo: (todoText: string) => void;
};

const NewTodo: React.SFC<NewTodoProps> = ({ addTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event?.preventDefault();
    const enteredText = textInputRef.current!.value;
    addTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor='todoText'>Todo Text</label>
        <input type='text' id='todoText' ref={textInputRef} />
      </div>
      <button type='submit'>Add Todo</button>
    </form>
  );
};

export default NewTodo;
