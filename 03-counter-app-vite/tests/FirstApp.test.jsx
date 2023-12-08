import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas de FirstApp<>", () => {
  
  
    test("Debe hacer MATCH con el SNAPSHOT", () => {
        const title = "Hola soy un titulo";

        //El render lo que hace es crear un FIRSTAPP  pero PROPIO del TEST -> Por lo que SI MODIFICAS las props DEL ORIGINAL no cambia en nada
        const { container } = render(<FirstApp title={title} />);

        expect(container).toMatchSnapshot();
    });

    test('EL title debe estar en un h1', () => { 
        
        const title = "Sin titulo";
        const { container, getByText } = render(<FirstApp title={title} />);

        /*Pruebas*/ 
        expect(getByText(title)).toBeTruthy(); //Si existe el elemento con el texto 'title' = "Sin titulo"
        
        const h1 = container.querySelector('h1'); //Guardamos el primer elemento del FirstApp tipo h1
        
        expect(h1.innerHTML).toContain(title); //Si el innerHTML del h1 contiene el title = "Sin titulo"


     })

});
