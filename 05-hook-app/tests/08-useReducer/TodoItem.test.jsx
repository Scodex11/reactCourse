import { render, screen, fireEvent } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReduce";
describe("Pruebas en TodoItem.jsx", () => {
  /* Globales */
  const todo = {
    id: 1,
    desc: "Aprender React",
    done: false,
  };

  const handleToggleMock = jest.fn();
  const handleDeleteMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  /* Fin Globales */

  /* Inicio pruebas*/
  test("TODO Pendiente de completar", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={handleToggleMock}
        onDeleteTodo={handleDeleteMock}
      />
    );

    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("align-self-center");
  });

  test("TODO debe estar COMPLETADO", () => {
    todo.done = true; //Mutamos el objeto 'todo'

    render(
        <TodoItem
        todo={todo}
        onToggleTodo={handleToggleMock}
        onDeleteTodo={handleDeleteMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain(
      "text-danger text-decoration-line-through"
    );
  });

  test("SPAN debe llamar al ToggleTodo cuando se hace click", () => {
    render(
        <TodoItem
        todo={todo}
        onToggleTodo={handleToggleMock}
        onDeleteTodo={handleDeleteMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);

    expect(handleToggleMock).toHaveBeenCalledWith(todo.id);
  });

  test("SPAN debe llamar al DELETETODO cuando se hace click", () => {
    render(
        <TodoItem
        todo={todo}
        onToggleTodo={handleToggleMock}
        onDeleteTodo={handleDeleteMock}
      />
    );

    const btnDelete = screen.getByText("Borrar");
    fireEvent.click(btnDelete);
    
    expect(handleDeleteMock).toHaveBeenCalledWith(todo.id);
  });
});
