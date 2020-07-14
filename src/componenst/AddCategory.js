import React, { useState } from 'react'

export const AddCategory = () => {

    const [inputValue, setinputValue] = useState('')

    //Funcion que controla el cambio en la caja de texto
    const handleInputChange = (e) => {
        setinputValue( e.target.value );    
    }

    //Funcion que observa el evento de envio del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />            
        </form>
    )
}
