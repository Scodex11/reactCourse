import { render, screen} from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en el componente <GifGrid />', () => {

    const category="One Punch";

    test('Debe inicializarse correctamente', () => {
        // Es un MOCK -> NO es el HOOK real, pero simula su comportamiento
        
        
        useFetchGifs.mockReturnValue({
            images: [], //Porque sabemos que trae un arreglo de imagenes
            isLoading: true //Siempre es true en estado inicial
        });


        render(<GifGrid category={category}/>);
        expect(screen.getByText(category));
        expect(screen.getByText('Cargando...'));
    });

    test('Debe mostrar items cuando useFetchGifs TIENE imagenes ', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        },
        {
            id: '123',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        },
        {
            id: '456',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }
    ];


        //Le enviamos al mock los supuestos gifs traidos
        useFetchGifs.mockReturnValue({
            images: gifs, 
            isLoading: false //False porque ya tiene datos
        });


        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(gifs.length);
    });

});