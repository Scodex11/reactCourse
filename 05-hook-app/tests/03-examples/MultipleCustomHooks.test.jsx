const { fireEvent, render, screen } = require("@testing-library/react");
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch"); //Mockear el useFetch
jest.mock("../../src/hooks/useCounter"); //Mockear el useCounter

describe("Prueba en <multipleCustomHooks/>", () => {
  /*Definiciones Globales */
  const defaultText = "No hay datos disponibles.";

  const setMock = jest.fn();

  //useCounter +1 and -1
  useCounter.mockReturnValue({
    counter: 5,
    increment: setMock,
    decrement: setMock,
  });

  //Resetear el MOCK luego de cada test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Debe mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    }); //Simular el retorno de useFetch

    render(<MultipleCustomHooks />);
    const defaultComp = screen.getByText(defaultText);
    expect(defaultComp).toBeTruthy();
  });

  test("Debe mostrar una CARD del personaje", () => {
    useFetch.mockReturnValue({
      //Coloca la data entre {} NO entre [] porque la simulación devuelve un objeto NO un Array con un objeto
      data: {
        name: "Morty Smith",
        status: "Alive",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        gender: "Male",
      },
      isLoading: false, //porque ya cargó
      error: null,
    }); //Simular el retorno de useFetch

    render(<MultipleCustomHooks />);
    // screen.debug()

    // Verificar que el texto del personaje se muestra correctamente
    expect(screen.getByText("Morty Smith")).toBeTruthy();

    // Verificar que la imagen se muestra correctamente con el atributo alt
    const imageElement = screen.getByAltText("Morty Smith");
    expect(imageElement).toBeTruthy();

    expect(imageElement.src).toBe(
      "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    );

    // Verificar que el género se muestra correctamente
    expect(screen.getByText("Male")).toBeTruthy();

    // Verificar que el estado se muestra correctamente
    expect(screen.getByText("Alive")).toBeTruthy();

    // Verificar que los botones "Back" y "Next" están presentes
    expect(screen.getByText("Back")).toBeTruthy();
    expect(screen.getByText("Next")).toBeTruthy();
  });

  test("Debe CAMBIAR de PERSONAJE cuando presiona NEXT", () => {
  
  
    useFetch.mockReturnValue({
      data: {
        name: "Morty Smith",
        status: "Alive",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        gender: "Male",
      },
      isLoading: false, //porque ya cargó
      error: null,
    });

    render(<MultipleCustomHooks />);
   
    const nextButton = screen.getByRole('button',{ name: 'Next' });
    fireEvent.click(nextButton);

    expect( setMock ).toHaveBeenCalled();
  });

  test("Debe CAMBIAR de PERSONAJE cuando presiona BACK", () => {
    useFetch.mockReturnValue({
      data: {
        name: "Morty Smith",
        status: "Alive",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        gender: "Male",
      },
      isLoading: false,
      error: null,
    });
  
    render(<MultipleCustomHooks />);
    
    const backButton = screen.getByRole('button', { name: 'Back' });
    fireEvent.click(backButton);
  
    expect(setMock).toHaveBeenCalled();
  });



});
