import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas de LIMPIAS de FirstApp<>", () => {
  
    const title = "Sin titulo";
    const subTitle = "Sin subtitulo";
    const name = "Sin nombre";

    test('Debe hacer MATCH con el SNAPSHOT', () => { 
        
        const { container } = render(<FirstApp title={title} />);
        expect(container).toMatchSnapshot();
     })     

     test('Debe mostrar el titulo enviado por props', () => { 
        
        render(<FirstApp title={title} />);
        expect(screen.getByTestId('test-title').textContent).toContain(title);
     })

     test('Debe mostrar el titulo en un H1', () => { 

        render(<FirstApp title={title} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);

      })

      test('Debe mostrar el subtitulo enviado por props', () => { 
        
        render(<FirstApp title={title} subTitle={subTitle} />);
        expect(screen.getByText(subTitle).textContent).toContain(subTitle);
        })
});
