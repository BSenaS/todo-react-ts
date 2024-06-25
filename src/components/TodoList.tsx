import { useRef, useState } from "react";
import Todo from "./Todo";
import { FaPencilAlt } from "react-icons/fa";

type TodoType = {
  todoInput: string;
};

const TodoList = () => {
  const [todo, setTodo] = useState<TodoType[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const inputChangeHandler = (value: string) => {
    setInputValue(value);
  };

  const handleAddTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputValue.length > 0) {
      const newTodo = { todoInput: inputValue };
      setTodo((prevTodo) => [...prevTodo, newTodo]);
    }
    setInputValue("");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 ">
      <div className="flex bg-slate-800 w-[400px] justify-between py-4 rounded-md">
        <input
          type="text"
          placeholder="Add Todo"
          value={inputValue}
          className="flex flex-wrap text-white bg-slate-800 ml-2 w-full"
          onChange={(e) => inputChangeHandler(e.target.value)}
        />
        <button
          className="text-white font-bold text-5xl"
          onClick={handleAddTodo}
        >
          +
        </button>
      </div>
      {todo.map((todo) => (
        <Todo todoInput={todo.todoInput} key={todo.todoInput} />
      ))}
    </div>
  );
};

export default TodoList;
