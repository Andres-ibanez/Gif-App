import React, { useEffect } from 'react'
import { useState } from 'react';
import { GifItem } from './GifItem';

export const GifContainer = ({ category }) => {

    const [images, setimages] = useState([]);

    useEffect(() => {
        getGifs();
    }, [])

    //Funcion asincrona que realiza la peticion de gif
    const getGifs = async () => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=24KT2HQa6dwV7OR4TNCkWFHvhETCYlnf';
        const response = await fetch( url );
        const { data } = await response.json();
        console.log(data)
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        }) 

        setimages(gifs)
    }

    return (
        <div>
            {
                images.map( image =>  
                    <GifItem 
                        { ...image } //envio de propiedades mediante desestructuracion
                        key={ image.id } 
                    />)
            }
        </div>
    )
}