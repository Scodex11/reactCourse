import { TodoList, TodoAdd } from "./";
import { useTodos } from "../hooks";

export const TodoApp = () => {

  const { todos, handleDelete, handleToggle, handleNewTodo, pendingTodos } = useTodos();

  console.log(pendingTodos);
  return (
    <>
      <h1>
        TodoApp: {todos.length}, <small>Pendiente: {pendingTodos}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleDelete} onToggleTodo={handleToggle}/>
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
