export interface InterfaceTodo {
  id: number;
  text: string;
  isCompleted: boolean;
}

export interface InterfaceTodolistComponent {
  todos: InterfaceTodo[];
}

export interface InterfaceTodoItemComponent {
  item: InterfaceTodo;
}
export interface InterfaceTodoFormComponet {
  handleAddTodo:(item: InterfaceTodo)
 =>void;
}
