import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

const Todo = (props: { todoInput: string }) => {
  return (
    <div className="flex justify-between text-white font-bold w-[500px] mx-auto border-2 rounded-md py-8 items-center">
      <p className="flex ml-2 w-full max-w-[450px]">{props.todoInput}</p>
      <div className="flex flex-col gap-2">
        <FaPencilAlt className="mr-2" size={25} />
        <FaDeleteLeft className="mr-2" size={25} />
      </div>
    </div>
  );
};

export default Todo;
