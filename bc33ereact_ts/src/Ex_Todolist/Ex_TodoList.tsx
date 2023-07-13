import React, { useState } from 'react'
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';
import { InterfaceTodo } from './interface/interface_EX_Todos';

type Props = {}

export default function Ex_TodoList({}: Props) {
  const [todos,setTodos]= useState<InterfaceTodo[]>([
    {
        id:1,
        text:"lam du an cuoi khoa",
        isCompleted: true,
    },
    {
        id:2,
        text:'lainha',
        isCompleted:false,
    }
  ]);
  const handleAddTodo = (newtodo:InterfaceTodo)=>{
    let newTodos=[...todos,newtodo];
    setTodos(newTodos);
  };

    return (
    <div className='container py-5'>
        <TodoForm handleAddTodo={handleAddTodo} />
        <TodoList todos={todos}/>
    </div>
  )
}