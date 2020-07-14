import React, { useState } from 'react'
import { AddCategory } from './componenst/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    //funcion para administrar la adicion de categorias de busqueda
    const handleAddCategory = () => {
        setCategories([...categories, 'jajaja'])
    }

    return (
        <div>
            <h2>Gif Expert App</h2>
            <AddCategory />
            <hr/>
            
            <ol>
                {
                    categories.map( category => {
                        return <li key={ category }>{ category }</li>
                    })
                }
            </ol>
        </div>
    )
}
