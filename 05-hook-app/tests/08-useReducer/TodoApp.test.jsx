import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReduce";
import { useTodos } from "../../src/hooks/useTodos";

jest.mock("../../src/hooks/useTodos");

describe("Pruebas en TodoApp.jsx", () => {
  // todos, handleDelete, handleToggle, handleNewTodo, pendingTodos
  useTodos.mockReturnValue({
    todos: [
      { id: 1, desc: "Todo #1", done: false },
      { id: 2, desc: "Todo #2", done: true },
    ],
    handleNewTodo: jest.fn(),
    handleDelete: jest.fn(),
    handleToggle: jest.fn(),
    pendingTodos: 1,
  });

  test("debe de mostrar el componente correctamente", () => {
    render(<TodoApp />);
    // screen.debug();

    expect(screen.getByText("Todo #1")).toBeTruthy();
    expect(screen.getByText("Todo #2")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
