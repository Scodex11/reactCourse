import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

//DESCRIPCION del COMPONENTE:
//Este componente se encarga de colocar en un GRID los GIF item que se obtienen de la API

export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs(category);


    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && <p>Cargando...</p>
            }
            
            <div className="card-grid">
                {
                    images.map( (img) => (
                        <GifItem 
                            key={img.id}
                            {...img} // Enviamos todas las propiedades al componente
                        />
                    ))
                }
            </div>
            
        </>
    )
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}