import { TodoItem } from "./";

export const TodoList = ({ todos = [] , onDeleteTodo, onToggleTodo}) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        //El key es obligatorio para que React sepa que elemento es cual
        <TodoItem key={todo.id} todo={todo} onDeleteTodo = {onDeleteTodo} onToggleTodo={onToggleTodo}/>
      ))}
    </ul>
  );
};
