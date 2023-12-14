import { render, screen} from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';


describe('Pruebas en <GifItem />', () => { 
    
    const title = 'Japanese';
    const url = 'https://localhost/algo.jpg';

    test('debe de mostrar el componente correctamente', () => {
      
        const {container} = render(<GifItem title={ title } url={ url }/>)
        
        expect(container).toMatchSnapshot();
    })

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => { 
        
        render(<GifItem title={ title } url={ url }/>)
        
        //Desestructuramos el primer valor con img  obtener SRC y ALT
        const {src, alt} = screen.getByRole('img');
        
        expect(src).toBe(url);
        expect(alt).toBe(title);
     })

     test('El titulo debe existir', () => { 
        
        render(<GifItem title={ title } url={ url }/>)
        
        const titleElement = screen.getByText(title);
        
        expect(titleElement).toBeTruthy();

      })


 })