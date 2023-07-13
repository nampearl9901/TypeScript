import React from 'react'
import { InterfaceTodoItemComponent } from '../interface/interface_EX_Todos';

type Props = {}

export default function TodoItem({item}: InterfaceTodoItemComponent) {
  return (
    <tr>
        <td>
            {item.id}
        </td>
        <td>
            {item.text}
        </td>
        <td>
            <input type='checkbox' checked={item.isCompleted}/>
        </td>
    </tr>
  )
}