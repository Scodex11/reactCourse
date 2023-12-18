export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li
      key={todo.id}
      className="list-group-item d-flex justify-content-between"
    >
      <span
        aria-label="span"
        //Si done es true, añade la clase
        className={`align-self-center ${
          todo.done
            ? "text-danger text-decoration-line-through"
            : "text-success"
        }`}
        onClick={() => onToggleTodo(todo.id)}
      >
        <b>{todo.desc}</b>
      </span>
      <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>
        Borrar
      </button>
    </li>
  );
};
