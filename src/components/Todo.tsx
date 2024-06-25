import React, { Dispatch, SetStateAction, useEffect } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { TodoType } from "./TodoList";

type TodoProps = {
  todoInput: string;
  setCurrentTodo: Dispatch<SetStateAction<TodoType | undefined>>;
  setTodo: Dispatch<SetStateAction<TodoType[]>>;
};

const Todo = ({ todoInput, setCurrentTodo, setTodo }: TodoProps) => {
  const handleEditTodo = () => {
    setCurrentTodo({ todoInput });
  };

  return (
    <div className="flex justify-between text-white font-bold w-[500px] mx-auto border-2 rounded-md py-8 items-center">
      <p className="flex ml-2 w-full max-w-[450px]">{todoInput}</p>
      <div className="flex flex-col gap-2">
        <FaPencilAlt
          className="mr-2 cursor-pointer"
          size={25}
          onClick={handleEditTodo}
        />
        <FaDeleteLeft className="mr-2 cursor-pointer" size={25} />
      </div>
    </div>
  );
};

export default Todo;
