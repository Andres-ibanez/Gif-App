import React, { useEffect } from 'react'
import { useState } from 'react';
import { GifItem } from './GifItem';
import { getGifs } from '../helpers/getGifs';

export const GifContainer = ({ category }) => {

    const [images, setimages] = useState([]);

    useEffect(() => {
        getGifs( category )
            .then( setimages );
    }, [ category ])

    return (
        <>
            <h3>{ category }</h3>
            <div className="container">
                {
                    images.map( image =>  
                        <GifItem 
                            { ...image } //envio de propiedades mediante desestructuracion
                            key={ image.id } 
                        />)
                }
            </div>
        </>
    )
}