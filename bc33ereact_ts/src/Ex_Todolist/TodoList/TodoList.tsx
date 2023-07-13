import React from "react";
import { InterfaceTodolistComponent } from "../interface/interface_EX_Todos";
import TodoItem from "../Todoitem/TodoItem";

type Props = {};

export default function TodoList({ todos }: InterfaceTodolistComponent) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th> ID</th>
            <th> Text</th>
            <th> IsCompleted</th>
          </tr>
        </thead>
        <tbody>
            {todos.map((item)=>{
                return <TodoItem item={item}/>;
            })}
        </tbody>
      </table>
    </div>
  );
}
