import React, { useState } from 'react'
import { AddCategory } from './componenst/AddCategory';
import { GifContainer } from './componenst/GifContainer';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    return (
        <div>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>
            {
                categories.map( category => 
                    <GifContainer 
                        key={ category }
                        category={ category } 
                    />
                )
            }
        </div>
    )
}
