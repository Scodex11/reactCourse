import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Pruebas en <CounterApp />", () => {
  /* Globales */
  const initialValue = 10;

  // test("Debe hacer match con el snapshot", () => {
  //   const { container } = render(<CounterApp value={initialValue} />);
  //   expect(container).toMatchSnapshot();
  // });

  test("Debe mostrar el valor inicial 100", () => {
    const newValue = 100;
    render(<CounterApp value={newValue} />);
    // expect(screen.getByText(newValue)).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      newValue.toString()
    );
  });

  test("Debe incrementar con el boton +1", () => {
    render(<CounterApp value={initialValue} />);
    
    const btn_Suma = screen.getByRole("button", { name: "+1" });
    //Simular el click
    fireEvent.click(btn_Suma);
    
    expect(screen.getByText(initialValue + 1)).toBeTruthy();
  });

  test("Debe decrementar con el boton -1", () => {
    render(<CounterApp value={initialValue} />);
    const btn_Resta = screen.getByRole("button", { name: "-1" });
    //Simular el click
    fireEvent.click(btn_Resta);
    expect(screen.getByText(initialValue - 1)).toBeTruthy();
  });

  test("Debe resetear con el boton RESET", () => {
    render(<CounterApp value={initialValue} />);
    const btn_Reset = screen.getByRole("button", { name: "RESET" });
    //Simular el click
    fireEvent.click(btn_Reset);
    expect(screen.getByText(initialValue)).toBeTruthy();
  });
});
