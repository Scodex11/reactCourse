import {getGifs} from "../helpers/getGifs";
import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";



export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    };



    useEffect(() => {
        getImages();
    }, [ ]);

    

    return (
        <>
            <h3>{ category }</h3>
            
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
