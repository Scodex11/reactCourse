import { renderHook, act } from "@testing-library/react";
import { useForm } from "../../src/hooks";

describe("Pruebas en useForm.js", () => {
  const initialForm = {
    name: "Juan",
    email: "juan@gmail.com",
  };

  test("Debe regresar los valores default", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { name, email, formState, onInputChange, onResetForm } =
      result.current;
    expect(name).toBe(initialForm.name);
    expect(email).toBe(initialForm.email);
    expect(formState).toEqual(initialForm);

    expect(typeof onInputChange).toBe("function");
    expect(typeof onResetForm).toBe("function");
  });

  test("Debe cambiar el valor del formulario (cambiar name)", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;
    const newName = "Pedro";

    act(() => {
      onInputChange({ target: { name: "name", value: newName } });
    });

    const { name } = result.current;
    expect(name).toBe(newName);
  });

  test('Debe volver al estado inicial', () => { 

    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;
    const newName = "Roberto";

    act(() => {
      onInputChange({ target: { name: "name", value: newName } });
      onResetForm();  
    })

    const { name } = result.current;
    
    expect(name).toBe(initialForm.name);

   })
});
