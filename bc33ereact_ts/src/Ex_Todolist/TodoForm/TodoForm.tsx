import React, { useState } from "react";
import {
  InterfaceTodo,
  InterfaceTodoFormComponet,
} from "../interface/interface_EX_Todos";

type Props = {};

export default function TodoForm({ handleAddTodo }: InterfaceTodoFormComponet) {
  const [title, setTitle] = useState<string>("");
  const handleOnChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };
  const handleSubmit = () => {
    let newTodo: InterfaceTodo = {
      id: 3,
      text: title,
      isCompleted: false,
    };
    handleAddTodo(newTodo);
  };
  return (
    <div className="d-flex justify-content-center mb-5">
      <input
        onChange={handleOnChangeTitle}
        type="text"
        name=""
        id=""
        className="p-2 w-50"
      />
      <button onClick={handleSubmit} className="btn btn-outline-warning ">
        Add
      </button>
    </div>
  );
}
