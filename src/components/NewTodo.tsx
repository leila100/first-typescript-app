import React, { useRef } from "react";

export interface NewTodoProps {}

const NewTodo: React.SFC<NewTodoProps> = () => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event?.preventDefault();
    const enteredText = textInputRef?.current?.value;
    console.log(enteredText);
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
