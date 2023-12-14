import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) => {
  
    
    const [images, setImages] = useState([]); //Hook para obtener las imagenes en un ARRAY

    const [isLoading, setIsLoading] = useState(true); //Hook para saber si esta cargando o no

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    };


    useEffect(() => {
        getImages();
    }, []);
    
    return {
        images,
        isLoading
    }
}
