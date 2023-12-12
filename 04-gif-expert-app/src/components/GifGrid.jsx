import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";



export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs(category);


    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && <p>Loading...</p>
            }
            
            <div className="card-grid">
                {
                    images.map( (img) => (
                        <GifItem 
                            key={img.id}
                            {...img} // Spread operator to send all the properties of the object
                        />
                    ))
                }
            </div>
            
        </>
    )
};
